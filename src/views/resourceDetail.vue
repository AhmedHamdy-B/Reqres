<template>
 <v-main  >
 <v-container  >
     <v-row  >
         <v-col cols="12" >
               <v-card class="ml-auto"  :color="resource.color"  dark max-width="500" min-height="300">
            <v-card-title >
              <v-list-item class="grow ">
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                    src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                     class="mx-3 px-3 d-flex justify-start align-start"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>{{resource.name}}</v-list-item-content>
              </v-list-item>
            </v-card-title>

            <v-card-text class="headline font-weight-bold">Pantone Value: {{resource.pantone_value}}</v-card-text>

            <v-card-actions class=" ml-6">
              <v-icon large left>mdi-calendar-range</v-icon>
              <span class="title font-weight-light">{{resource.year}}</span>
            </v-card-actions>
          </v-card>
          </v-col>
          </v-row>
 </v-container>
 </v-main>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      resource: null,
      fullResp: null,
    };
  },
  mounted() {
    this.FetchResource();
  },
  methods: {
    FetchResource() {
      const slug = this.$route.params.slug;
      axios.get(`https://reqres.in/api/unknown/${slug}`).then((response) => {
        this.resource = response.data.data;
        this.fullResp = response.data;
      });
    },
  },
};
</script>

<style>
</style>