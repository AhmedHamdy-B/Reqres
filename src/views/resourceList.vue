<template>
  <v-app>
    <v-main>
      <v-row class="d-flex justify-center align-center">
        <v-col
          class="mx-3 d-flex justify-center align-center"
          cols="12"
          md="4"
          v-for="resource in resources"
          :key="resource.id"
        >
          <v-card @click="resourceDetails(resource.id)" :color="resource.color" class="mx-2" dark min-width="400">
            <v-card-title>
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                    class="d-flex justify-start align-start"
                    src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content class>{{resource.name}}</v-list-item-content>
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
            <div class="text-xs-center mt-4">
        <v-pagination
          v-if="fullResp.total_pages > 1"
          v-model="currentPage"
          :length="fullResp.total_pages"
          :total-visible="fullResp.per_page"
          @input="FetchResources()"
        ></v-pagination>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      resources: null,
      fullResp:null,
      currentPage:1
    };
  },
  mounted() {
this.FetchResources()
  },
   methods: {
       resourceDetails(slug){
           this.$router.push(`resourceList/${slug}`)
       },

FetchResources(){
     const page = this.currentPage || 1
axios.get(`https://reqres.in/api/unknown?page=${page}`)
      .then((response) => {
          this.resources = response.data.data
          this.fullResp = response.data
          }
      
      );
}
  },
};
</script>

<style>
</style>