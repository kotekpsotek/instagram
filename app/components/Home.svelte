<page actionBarHidden={true} on:navigatedFrom={navigatedFrom}>
    <actionBar title="Timespace"/>
    <gridLayout rows="70, *, 70">
        <flexboxLayout row="0" id="logo-stripe" justifyContent="space-between">
            <label id="ig-logo">Instagram</label>
            <flexboxLayout justifyContent="flex-end" id="top-navigation">
                <label id="add" text="&#xf0fe;" class="fas {selectedOptionTop == "add" ? "option-selected" : ""}" on:tap={pickUpTopOption("add")}/>
                <label id="loved" text="&#xf004;" class="fas {selectedOptionTop == "loved" ? "option-selected" : ""}" on:tap={pickUpTopOption("loved")}/>
                <label id="message" text="&#xf075;" class="fas {selectedOptionTop == "message" ? "option-selected" : ""}" on:tap={pickUpTopOption("message")}/>
            </flexboxLayout>
        </flexboxLayout>
        <scrollView row="1" scrollBarIndicatorVisible={false}>
            <gridLayout rows="auto, auto">
                <InstaStories/>
                <flexboxLayout row=1 id="posts-board" flexDirection="column" marginTop="5">
                    {#each posts as post (post.pub_date)}
                        <InstaPost {post}/>
                    {/each}
                </flexboxLayout>
            </gridLayout>
        </scrollView>
        <flexboxLayout row="2" id="nav-stripe">
            {#if selectedOptionBottom}
            <label id="home" text="&#xf015;" class="fas {selectedOptionBottom == "home" ? "option-selected" : ""}" on:tap={pickUpNavOption("home")}/>
            <label id="search" text="&#xf002;" class="fas {selectedOptionBottom == "search" ? "option-selected" : ""}" on:tap={pickUpNavOption("search")}/>
            <label id="videos" text="&#xf008;" class="fas {selectedOptionBottom == "videos" ? "option-selected" : ""}" on:tap={pickUpNavOption("videos")}/>
            <label id="shop" text="&#xf290;" class="fas {selectedOptionBottom == "shop" ? "option-selected" : ""}" on:tap={pickUpNavOption("shop")}/>
            <label id="account" text="&#xf2bd;" class="fas {selectedOptionBottom == "account" ? "option-selected" : ""}" on:tap={pickUpNavOption("account")}/>
            {/if}
        </flexboxLayout>
    </gridLayout>
</page>

<script lang="ts">
    import { NavigatedData, Page, TapGestureEventData } from "@nativescript/core";
    import InstaPost from "./InstaPost.svelte";
    import InstaStories from "./InstaStories.svelte";
    import { navigate } from "svelte-native";
    import { newPost } from "~/stores";

    // Pages
    import AddImage from "./AddImage.svelte";

    // Posts list
    let posts: Posts = [
        {
            profile_img: "~/assets/cat.jpg",
            user_name: "Furry cat",
            post_img: "~/assets/girl-gun.jpg",
            liked_by: ["Anna", "tom"],
            location: "Warsaw, Mazovia",
            description: "Im furry really cat. And 11111111111111111111111111111111111111111 222222222222222222222222222222222 3333333333333333333333333",
            comments: ["2", "2", "2", "a", "q", "q", "a"],
            pub_date: new Date(),
            you_like: false
        },
        {
            profile_img: "~/assets/cat.jpg",
            user_name: "Furry dog",
            post_img: "~/assets/girl-1.jpg",
            liked_by: ["Anna", "tom"],
            location: "Warsaw, Mazovia",
            description: "Im furry really cat. And 11111111111111111111111111111111111111111 222222222222222222222222222222222 3333333333333333333333333",
            comments: ["2", "2", "2", "a", "q", "q", "a"],
            pub_date: new Date(),
            you_like: false
        }
    ];

    let selectedOptionTop: TopOptions | undefined;
    let selectedOptionBottom: BottomOptions = "home";

    /** Switch between options */
    function pickUpTopOption(op: TopOptions) {
        return () => {
            selectedOptionTop = op;

            switch(op) {
                case "add":
                    navigate({
                        page: AddImage
                    })
                break;
            }
        }
    }
    
    function pickUpNavOption(op: BottomOptions) {
        return (eg: TapGestureEventData) => {
            selectedOptionBottom = op;
        };
    }

    /** Handle navigation from */
    function navigatedFrom(args: NavigatedData) {
        selectedOptionTop = undefined;
        selectedOptionBottom = "home"
    }

    // Refresh posts when new post arrive 
    $: if ($newPost) {
        posts = [$newPost, ...posts];
        $newPost = undefined;
    }
</script>

<style>
    #logo-stripe {
        padding-left: 25;
        padding-right: 10;
    }

    #ig-logo {
        width: 50%;
        font-family: 'instagram-logo';
        font-size: 35;
        color: black;
    }

    #add, #loved, #message {
        height: 100%;
        width: 22%;
        font-size: 24;
        background-color: transparent;
        border-width: 0;
        z-index: 0;
        margin: 0px;
        color: black;
        text-align: center;
    }

    #add.option-selected, #loved.option-selected, #message.option-selected {
        color: var(--switchable-red) !important;
    } 

    #nav-stripe > label {
        text-align: center;
        font-size: 24;
        width: calc(100% / 5);
        color: black;
    }

    #posts-board {
        background-color: rgb(198, 198, 198);
    }

    #nav-stripe > label.option-selected {
        color: var(--switchable-red) !important;
    }
</style>
