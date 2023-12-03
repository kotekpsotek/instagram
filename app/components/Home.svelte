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
        <flexboxLayout row="1">
        </flexboxLayout>
        <flexboxLayout row="2">

        </flexboxLayout>
    </gridLayout>
</page>

<script lang="ts">
    let message: string = "Blank Svelte Native App"
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
</style>
