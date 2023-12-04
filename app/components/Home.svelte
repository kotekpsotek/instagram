<page actionBarHidden={true}>
    <gridLayout rows="70, *, 70">
        <flexboxLayout row="0" id="logo-stripe" justifyContent="space-between">
            <label id="ig-logo">Instagram</label>
            <flexboxLayout justifyContent="flex-end">
                <label id="add" text="&#xf0fe;" class="fas"/>
                <label id="loved" text="&#xf004;" class="fas"/>
                <label id="message" text="&#xf075;" class="fas"/>
            </flexboxLayout>
        </flexboxLayout>
        <gridLayout row="1" rows="auto, *">
            <InstaStories/>
            <scrollView row="1" scrollBarIndicatorVisible={false}>
                <flexboxLayout id="posts-board" flexDirection="column" marginTop="5">
                    <label backgroundColor="red"></label>
                    <InstaPost/>
                </flexboxLayout>
            </scrollView>
        </gridLayout>
        <flexboxLayout row="2" id="nav-stripe">
            <label id="home" text="&#xf015;" class="fas"/>
            <label id="search" text="&#xf002;" class="fas"/>
            <label id="videos" text="&#xf008;" class="fas"/>
            <label id="shop" text="&#xf290;" class="fas"/>
            <label id="account" text="&#xf2bd;" class="fas"/>
        </flexboxLayout>
    </gridLayout>
</page>

<script lang="ts">
    import InstaPost from "./InstaPost.svelte";
    import InstaStories from "./InstaStories.svelte";

    let posts: {
        profile_img: string,
        /** Name location assigned to post */
        location?: string,
        user_name: string,
        post_img: string,
        /** Names who likes this post */
        liked_by: string[],
        description: string
    }[]
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

    #nav-stripe > label {
        text-align: center;
        font-size: 24;
        width: calc(100% / 5);
        color: black;
    }
</style>
