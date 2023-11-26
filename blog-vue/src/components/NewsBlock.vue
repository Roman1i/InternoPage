<template>
    <div class="blog">
        <div class="blog__details">
            <div v-for="(item, index) in sortedList" :key="index" class="blog__details__element">
                <h1 class="blog__details__element__header">{{ item.header1 }}</h1>
                <img :src="item.img1src" alt="">
                <div class="blog__details__element__date">
                    <p>{{ item.date }}</p>
                    <p>Interior / Home / Decore</p>
                </div>
                <p class="blog__details__element__text"> {{ item.text1 }}</p>
                <div class="blog__details__element__quote">
                    <h1 class="blog__details__element__quote__head">“</h1>
                    <h2 class="blog__details__element__quote__text">{{ item.quote }}</h2>
                </div>
                <h1 class="blog__details__element__header">{{ item.header2 }}</h1>
                <p class="blog__details__element__text">{{ item.text2 }}</p>
                <div class="blog__details__element__list">
                    <div v-for="(listItem, index) in item.list" :key="index" class="blog__details__element__list__element">
                        <span class="blog__details__element__list__element__number">{{ index+1 }}</span>
                        <p class="blog__details__element__list__element__text">{{ listItem }}</p>
                    </div>
                </div>
                <img :src="item.img2src" alt="" class="blog__details__element__image2">
                <p class="blog__details__element__text">{{ item.text3 }}</p>
            </div>
        </div>
        <div class="blog__sidebar">
            <h1 class="blog__sidebar__header">Tags</h1>
            <div class="blog__sidebar__tags">
                <div v-for="(tag, index) in tags" :key="index" @click="addPropertie(tag.tag), toggle(index)" :class="tag.active">
                    <p>{{ tag.tag }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'NewsBlock',

  data () {
    return {
      activeTags: [],
      tags: [{
        tag: 'Kitchen',
        active: 'blog__sidebar__tags__tag'
      },
      {
        tag: 'Bedroom',
        active: 'blog__sidebar__tags__tag'
      },
      {
        tag: 'Building',
        active: 'blog__sidebar__tags__tag'
      },
      {
        tag: 'Architecture',
        active: 'blog__sidebar__tags__tag'
      },
      {
        tag: 'Kitchen Planning',
        active: 'blog__sidebar__tags__tag'
      }],
      news: [{
        tag: 'Kitchen',
        header1: 'Let’s Get Solution for Building Construction Work',
        header2: 'Design sprints are great',
        img1src: 'BlogDetails1.png',
        img2src: 'BlogDetails2.png',
        date: '26 December, 2022',
        text1: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus. posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which dont look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        text2: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        text3: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        quote: 'The details are not the details. They make the design.',
        list: ['Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.']
      }, {
        tag: 'Bedroom',
        header1: 'Let’s Get Solution for Building Construction Work',
        header2: 'Design sprints are great',
        img1src: 'BlogDetails1.png',
        img2src: 'BlogDetails2.png',
        date: '26 December, 2022',
        text1: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus. posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which dont look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        text2: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        text3: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        quote: 'The details are not the details. They make the design.',
        list: ['Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.']
      }]
    }
  },

  mounted () {
  },

  methods: {
    addPropertie (tag) {
      if (!this.activeTags.includes(tag)) {
        this.activeTags.push(tag)
      } else {
        this.activeTags.splice(this.activeTags.indexOf(tag), 1)
      }
    },
    toggle (i) {
      if (this.tags[i].active === 'blog__sidebar__tags__tag') {
        this.tags[i].active = 'blog__sidebar__tags__tag2'
        console.log(this.activeTags)
      } else {
        this.tags[i].active = 'blog__sidebar__tags__tag'
      }
      console.log(this.tags)
    }
  },

  computed: {
    sortedList () {
      if (this.activeTags.length !== 0) {
        return this.news.filter(item => this.activeTags.includes(item.tag))
      } else {
        return this.news
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.blog {
    padding-top: 200px;
    display: flex;
    justify-content: space-between;
    gap: 52px;
    &__details {
        width: 804px;
        &__element {
            padding-bottom: 96px;
            &__header {
                font-family: DM Serif Display;
                font-size: 50px;
                font-weight: 400;
                line-height: 63px;
                letter-spacing: 0.02em;
                text-align: left;
                color: #292F36;
                padding-bottom: 21px;
            }
            &__date {
                padding-top: 46px;
                padding-bottom: 48px;
                display: flex;
                justify-content: space-between;
                font-family: Jost;
                font-size: 16px;
                font-weight: 400;
                line-height: 24px;
                letter-spacing: 0.01em;
                text-align: left;
                width: 735px;
            }
            &__text {
                font-family: Jost;
                font-size: 22px;
                font-weight: 400;
                line-height: 33px;
                letter-spacing: 0.01em;
                text-align: left;
                color: #4D5053;
                padding-bottom: 35px;
            }
            &__quote {
                box-sizing: content-box;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background-color: #F4F0EC;
                border-radius: 50px;
                padding-bottom: 53px;
                padding-top: 53px;
                height: 161px;
                margin-bottom: 20px;
                &__head {
                    font-family: DM Serif Display;
                    font-size: 200px;
                    font-style: italic;
                    font-weight: 400;
                    line-height: 250px;
                    letter-spacing: 0.02em;
                    text-align: center;
                    color: #CDA274;
                    width: 100px;
                    height: 120px;

                }
                &__text {
                    font-family: DM Serif Display;
                    font-size: 25px;
                    font-style: italic;
                    font-weight: 400;
                    line-height: 31px;
                    letter-spacing: 0.02em;
                    text-align: center;
                    color: #CDA274;
                    width: 345px;
                    height: 70px;

                }
            }
            &__list {
                display: flex;
                flex-direction: column;
                gap: 32px;
                padding-bottom: 44px;
                &__element {
                    display: flex;
                    gap: 14px;
                    &__number {
                        padding-top: 3px;
                        font-family: DM Serif Display;
                        font-size: 20px;
                        font-weight: 400;
                        line-height: 25px;
                        letter-spacing: 0.02em;
                        text-align: left;
                        color: #CDA274;
                    }
                    &__text {
                        font-family: Jost;
                        font-size: 22px;
                        font-weight: 400;
                        line-height: 33px;
                        letter-spacing: 0.01em;
                        text-align: left;
                        color: #4D5053;
                    }
                }
            }
            &__image2 {
                padding-bottom: 35px;
            }
        }
    }
    &__sidebar {

        &__header{
            font-family: DM Serif Display;
            font-size: 25px;
            font-weight: 400;
            line-height: 31px;
            letter-spacing: 0.02em;
            text-align: left;
            color: #292F36;
            padding-bottom: 24px;
        }
        &__tags {
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding-bottom: 96px;
            &__tag {
                font-family: Jost;
                font-size: 18px;
                font-weight: 400;
                line-height: 23px;
                letter-spacing: 0.02em;
                text-align: center;
                color: #292F36;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 9px 30px 9px 30px;
                background-color: #F4F0EC;
                border-radius: 10px;
            }
            &__tag2 {
                font-family: Jost;
                font-size: 18px;
                font-weight: 400;
                line-height: 23px;
                letter-spacing: 0.02em;
                text-align: center;
                color: #FFF;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 9px 30px 9px 30px;
                background-color: #292F36;
                border-radius: 10px;

            }
        }
    }
}
</style>
