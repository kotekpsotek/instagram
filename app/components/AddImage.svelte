<page bind:this={page}>
    <actionBar title="Add New Image">
        <navigationButton text="Go back" android.systemIcon="ic_menu_back" on:tap={_ => goBack()}/>
        <actionItem text="Add image" ios.positon="right" on:tap={accept}/>
    </actionBar>
    <scrollView scrollBarIndicatorVisible={false}>
        <stackLayout paddingLeft=5 paddingRight=5 paddingTop=4 paddingBottom=4>
            {#if !image}
                <button class="add-image" padding=20 height=250 on:tap={selectNewImage}>
                    <formattedString color="rgb(22, 103, 232)">
                        <span text="&#xf1c5;" class="fas add-img-ico"/>
                    </formattedString>
                </button>
            {:else}
                <image src={image.path} on:tap={unselectImage}/>
            {/if}
            <textField hint="[Optional] location" id="loca" bind:text={location}/>
            <flexboxLayout flexDirection="column" alignItems="flex-end">
                <textView hint="Description..." id="desc" bind:text={description}/>
                <label marginTop=2>{description.length}/5000</label>
            </flexboxLayout>
            <flexboxLayout justifyContent="flex-end" marginTop=10>
                <button class="accept" on:tap={accept}>Accept</button>
            </flexboxLayout>
        </stackLayout>
    </scrollView>
</page>

<script lang="ts">
    import { goBack } from "svelte-native";
    import { Dialogs, EventData, Page } from "@nativescript/core";
    import { newPost } from "~/stores";
    import * as imagePickerPlugin from "@nativescript/imagepicker";

    let page: Page;
    
    let image: undefined | imagePickerPlugin.ImagePickerSelection = undefined;
    let location = "";
    let description = "";

    function selectNewImage(args: EventData) {
        let context = imagePickerPlugin.create({
            mode: "single" // use "multiple" for multiple selection
        });
        context
            .authorize()
            .then(function() {
                return context.present();
            })
            .then(function(selection) {
                image = selection[0];
            }).catch(function (e) {
                console.error("Something went wrong!");
            });
    }

    function unselectImage() {
        image = undefined;
    }

    function accept() {
        if (image?.path) {
            if (description.length > 10 && description.length < 5_000) {
                Dialogs.alert({
                    title: 'Sent!',
                    message: 'You sent post!',
                    okButtonText: 'Go Back',
                    cancelable: true,
                })
        
                let newPFill: Post = {
                    profile_img: "~/assets/cat.jpg",
                    location: location,
                    user_name: "Me",
                    post_img: image?.path || "",
                    liked_by: [],
                    description: description,
                    comments: [],
                    pub_date: new Date(),
                    you_like: false
                }
                $newPost = newPFill;
        
                // Go back
                goBack();
            }
            else alert({
                title: "Uuupps you must refill something!",
                message: 'Minimum length of description is ' + 10 + ' and maximum is 5000 characters',
                okButtonText: 'OK',
                cancelable: true,
            })
        } 
        else alert({
            title: "No image!",
            message: 'You must specify image',
            okButtonText: 'I will pick-up',
            cancelable: true,
        });
    }
</script>

<style>
    .add-img-ico {
        margin-right: 5;
        font-size: 45;
        border-radius: 10;
    }

    .add-image {
        border-width: 1;
        border-radius: 15;
        border-color: gray;
        background-color: transparent;
    }

    #loca, #desc {
        border-width: 1;
        border-radius: 15;
        border-color: gray;
        margin-top: 10;
    }

    #desc {
        width: 100%;
        height: 175;
        vertical-align: top;
    }

    .accept {
        background-color: rgb(7, 168, 217);
        color: white;
        border-radius: 10;
        font-weight: 600;
    }
</style>
