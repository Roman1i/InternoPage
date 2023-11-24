Vue.component('news-block', {
    props: {  },

    data() {
        return {
            activeTags: [],
            tags: [{tag: "Kitchen",
                    active: "blog__sidebar__tags__tag"},
                    {tag: "Bedroom",
                    active: "blog__sidebar__tags__tag"},
                    {tag: "Building",
                    active: "blog__sidebar__tags__tag"},
                    {tag: "Architecture",
                    active: "blog__sidebar__tags__tag"},
                    {tag: "Kitchen Planning",
                    active: "blog__sidebar__tags__tag"}],
            news: [{
                tag: "Kitchen",
                header1: "Let’s Get Solution for Building Construction Work",
                header2: "Design sprints are great",
                img1src: "../img/BlogDetails1.png",
                img2src: "../img/BlogDetails2.png",
                date: "26 December, 2022",
                text1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus. posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                text2: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                text3: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                quote: "The details are not the details. They make the design.",
                list: ["Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                       "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                       "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."]
                
            },{
                tag: "Bedroom",
                header1: "Let’s Get Solution for Building Construction Work",
                header2: "Design sprints are great",
                img1src: "../img/BlogDetails1.png",
                img2src: "../img/BlogDetails2.png",
                date: "26 December, 2022",
                text1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus. posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                text2: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                text3: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                quote: "The details are not the details. They make the design.",
                list: ["Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                       "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                       "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."]
                
            }]
        }
    },

    methods: {
        addPropertie (tag){
            if (!this.activeTags.includes(tag)) {
                this.activeTags.push(tag);
            } else {
                this.activeTags.splice(this.activeTags.indexOf(tag), 1);
            }
        },

        toggle (i){
            if (this.tags[i].active === "blog__sidebar__tags__tag") {
                this.tags[i].active = "blog__sidebar__tags__tag2"
            } else {
                this.tags[i].active = "blog__sidebar__tags__tag"
            }
            console.log(this.tags);
            
        }
    },

    computed: {
        sortedList (){

            if (this.activeTags.length !== 0) {
                return this.news.filter(item => this.activeTags.includes(item.tag));
            } else if (this.activeTags.lengt === undefined) {
                return this.news;
            }
        }
    },

    template: `
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
    `,
});