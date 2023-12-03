<scrollView orientation="horizontal" scrollBarIndicatorVisible={false} width="100%">
  <flexboxLayout>
    {#each instastoriesList as { img, name, my, viewed }, id}
      <flexboxLayout id="storie" flexDirection="column" justifyContent="center" alignItems="center" on:tap={instastorieClicked(id)}>
        <absoluteLayout>
            <flexboxLayout id="image-gradient" class="{viewed ? "viewed" : ""}" justifyContent="center" alignItems="center">
                <flexboxLayout id="image-wr" justifyContent="center" alignItems="center">
                    <image src={img}/>
                </flexboxLayout>
            </flexboxLayout>
            {#if my}
                <label id="my-story" class="fas" text="&#xf067;" top=57 left=57/>
            {/if}
        </absoluteLayout>
        <label>{name}</label>
      </flexboxLayout>
    {/each}
  </flexboxLayout>
</scrollView>

<script lang="ts">
    let instastoriesList: {
      img: string;
      name: string;
      my?: boolean;
      viewed: boolean;
    }[] = [
        {
            img: "~/assets/cat.jpg",
            name: "My story",
            my: true,
            viewed: false
        },
        {
            img: "~/assets/reinder.jpg",
            name: "Reinder with Red nose",
            viewed: false
        },
        {
            img: "~/assets/girl-1.jpg",
            name: "girl-1.jpg",
            viewed: false
        },
        {
            img: "~/assets/santa-claus.jpg",
            name: "Santa Claus is walking",
            viewed: false
        },
        {
            img: "~/assets/girl-gun.jpg",
            name: "Unsafe Girl",
            viewed: false
        }
    ];

    /** When user click on instastorie */
    function instastorieClicked(id: number) {
        return () => {
            instastoriesList[id].viewed = true;
        }
    }
</script>

<style>
    #storie {
        width: 120;
        padding: 7;
    }

    #image-gradient {
        width: 80;
        height: 80;
        background-image: linear-gradient(45deg, orangered, rgb(166, 7, 172)); 
        border-radius: 50%;       
    }

    #image-gradient.viewed {
        background-image: none;
        background-color: rgb(18, 154, 227);
    }

    #image-wr {
        width: 75;
        height: 75;
        border-radius: 50%;
        position: relative;
        background-color: white;
    }

    #image-wr > image {
        width: 90%;
        height: 90%;
        background-color: rgb(55, 55, 55);
        object-fit: contain;
        border-width: 1;
        border-radius: 50%;
    }

    #my-story {
        position: absolute;
        bottom: 0;
        right: 0;
        border-radius: 50%;
        background-color: rgb(13, 128, 189);
        z-index: 2;
        width: 20;
        height: 20;
        color: white;
        text-align: center;
    }
</style>
