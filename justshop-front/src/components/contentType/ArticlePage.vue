<template>
  <div class="article-item">
    <div class="article-item__banner" v-bind:style="{ backgroundImage: 'url(' + coverImageUrl + ')' }"></div>
    <div class="article-item__content">{{ article[0].attributes.title }}</div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      article: [],
      coverImageUrl: [],
    };
  },
  created() {
    this.getArticle();
  },
  methods: {
    getArticle() {
      const slug = this.$route.params.slug;
      axios.get('https://justshop-back.ddev.site/jsonapi/node/article')
          .then(response => {
            this.article = response.data.data.filter(item => item.attributes.path.alias === '/' + slug);
            const mediaCoverImageLink = this.article[0].relationships.field_cover_image.links.related.href;
            axios.get(mediaCoverImageLink).then(response => {
              const mediaCoverImageURL = response.data.data.relationships.thumbnail.links.related.href;
              axios.get(mediaCoverImageURL).then(response => {
                this.coverImageUrl = 'https://justshop-back.ddev.site' + response.data.data.attributes.uri.url;
              });
            });
          })
          .catch(error => {
            console.error(error);
          });
    },
  },
};
</script>

<style lang="scss">
.article-item {
  &__banner {
    min-height: 360px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }
}
</style>
