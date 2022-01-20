<template>
<div>
   <h1>{{ this.personId? 'Edit' : 'Add'}} Person</h1><hr/>
   <div v-if=this.sent>
            <div v-if=this.sucess>
                <div class="alert alert-success"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">person saved successfully.</font></font></div>
            </div>
            <div v-else>
                <div class="alert alert-danger"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Error saving person..</font></font></div>
            </div>
    </div>
         
    <form @submit="handleSubmit">
     <div class="form-group"><label>Name:</label><br><input class="form-control" required placeholder="Enter the full name" v-model="personName" type="text"></div><br>
     <div class="form-group"><label>Date of birth:</label><br><input class="form-control" required  v-model="birthDate" type="date"></div><br>
     <div class="form-group">
            <label>country of origin:</label><br>
            <input class="form-control" required placeholder="Enter the country of origin" v-model="country" type="text">
     </div><br>
     <div class="form-group">
            <label>Biography:</label><br>
            <textarea required class="form-control" placeholder="Write a biography" rows="5" minlength="10" name="biography" spellcheck="false" v-model="biography"></textarea>    
     </div><br>
            <label>Role:</label><br>
     <div class="form-group form-check">
        <label class="form-check-label"><input type="radio" v-model="personRole" value="director">  Director</label> </div>
    <div class="form-group form-check">
        <label class="form-check-label"><input type="radio" v-model="personRole" value="actor">  Anactor</label>
     </div><br>     
   
    <input type="submit" class="btn btn-primary"  value="Impose"/>
  </form>
</div>
</template>
<script>
import {ApiGet,ApiPost,ApiPut} from "../../Api.js";
import {DateStringFormatter} from "../../DateStringFormatter.js";
 export default {
    
    data() {
        return {
            personId: null,

            personName: '',
            birthDate: '',
            country: '',
            biography: '',
            personRole: '',

            sent: false,
            success: false,
        }
    },
    methods: {
      handleSubmit: function (e) {
        e.preventDefault();
         const body = {
             name: this.personName,
            birthDate: this.birthDate,
            country: this.country,
            biography: this.biography,
            role: this.personRole,
        };

        (this.personId
                ? ApiPut('/api/people/' + this.personId, body)
                : ApiPost('/api/people/', body)
        ).then((data) => {
            console.log(data);
            this.sent=true;
            this.sucess=true;
        }).catch((error) => {
           console.error(error);
           this.sent=true;
           this.sucess=false;
        });
        
      }
    },
    mounted() {
        if(this.$route.params.id){
            this.personId=this.$route.params.id;
            ApiGet('/api/people/' + this.personId)
            .then(data =>{
                console.log("data====>",data);
                this.personName= data.name,
                this.birthDate= DateStringFormatter(data.birthDate),
                this.country= data.country,
                this.biography=data.biography,
                this.personRole= data.role
             });
        }
    }
}
</script>
<style>
</style>