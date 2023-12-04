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
</flexboxLayout>

<script lang="ts">
    export let post: Post;
</script>

<style>
    #upper-side {
        padding-left: 20;
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
</style>
