<flexboxLayout flexDirection="column" backgroundColor="white" marginTop="5">
    <flexboxLayout id="upper-side" justifyContent="space-between">
        <flexboxLayout id="img-name">
            <image id="p-img"  src="{post.profile_img}"/>
            <flexboxLayout flexDirection="column" justifyContent="center">
                <label id="user-name">{post.user_name}</label>
                {#if post.location}
                    <label id="location-ind">{post.location}</label>
                {/if}
            </flexboxLayout>
        </flexboxLayout>
        <label id="options" class="fas">&#xf141;</label>
    </flexboxLayout>
    <image id="post-img" src={post.post_img}/>
    <flexboxLayout id="action-side" justifyContent="space-between">
        <flexboxLayout id="fst" justifyContent="space-between" width="25%">
            <label id="like" class="fas {post.you_like ? "i-like" : ""}" text="&#xf004;" on:tap={likeAction}/>
            <label id="comment" class="fas" text="&#xf075;"/>
            <label id="send" class="fas" text="&#xf1d8;"/>
        </flexboxLayout>
        <flexboxLayout id="snd">
            <label class="fas" text="&#xf02e;"/>
        </flexboxLayout>
    </flexboxLayout>
    <flexboxLayout id="middle-side" flexDirection="column">
        <stackLayout orientation="horizontal">
            <!-- <absoluteLayout id="profile-imgs">
                <label/>
                <label/>
            </absoluteLayout> -->
            <stackLayout orientation="horizontal">
                {#if likedyByPersons.length}
                    <label>Liked by </label>
                    <label id="like-pos">{likedyByPersons.join(", ")}</label>
                    {#if post.liked_by.length - likedyByPersons.length}
                        <label>and</label> 
                        <label id="like-pos">{post.liked_by.length - likedyByPersons.length}</label>
                        <label>others</label>
                    {/if}
                {:else}
                    <label id="like-pos">0 Likes</label>
                {/if}
            </stackLayout>
        </stackLayout>
        <stackLayout id="description-wr" orientation="horizontal">
            <absoluteLayout marginRight=10>
                <label id="user-name-2" top="0">{post.user_name}</label>
            </absoluteLayout>
            <label id="description" textWrap={true}>{post.description}</label>
        </stackLayout>
    </flexboxLayout>
    <flexboxLayout id="bottom-side" justifyContent="space-between">
        <label id="comments">
            {#if post.comments.length}
                See all {post.comments.length} comments
            {:else}
                0 comments
            {/if}
        </label>
        <label id="date">
            {new Date().toLocaleDateString()}
        </label>
    </flexboxLayout>
</flexboxLayout>

<script lang="ts">
    export let post: Post;

    let likedyByPersons: string[];

    if (post.liked_by.length >= 2) {
        likedyByPersons = post.liked_by.slice(0, 2)
    }
    else if (post.liked_by.length == 1) {
        likedyByPersons = post.liked_by
    }
    else likedyByPersons = []

    function likeAction() {
        post.you_like = !post.you_like;
    }
</script>

<style>
    #upper-side {
        padding-left: 10;
        padding-right: 10;
    }

    #img-name {
        padding-top: 8;
        padding-bottom: 8;
        width: 45%;
    }

    #p-img {
        width: 40;
        height: 40;
        border-radius: 50%;
        background-color: rgb(55, 55, 55);
        margin-right: 10;
    }

    #user-name {
        font-size: 17;
        font-weight: bold;
        color: black;
    }

    #location-ind {
        font-size: 12;
    }

    #options {
        font-size: 20;
    }

    #post-img {
        background-color: whitesmoke;
        width: 100%;
        height: 330;
    }

    #action-side {
        padding-top: 12;
        padding-bottom: 12;
        padding-left: 10;
        padding-right: 10;
    }

    #fst, #snd {
        font-size: 25;
    }

    #middle-side, #comments, #date {
        padding-left: 10;
        padding-right: 10;
    }

    #like-pos {
        color: black;
        font-weight: bold;
        font-size: 16;
    }

    #description-wr {
        margin-top: 2;
        font-size: 17;
    }

    #user-name-2 {
        font-weight: bold;
        color: black;
    }

    #bottom-side {
        margin-top: 8;
        margin-bottom: 5;
    }

    .i-like {
        color: rgb(181, 4, 4) !important;
    }
</style>
