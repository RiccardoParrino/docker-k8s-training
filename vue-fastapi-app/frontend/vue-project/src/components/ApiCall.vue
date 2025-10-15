<template>
    <div>
        <h3>Data from API:</h3>
        <pre>{{ data }}</pre>
    </div>
</template>

<script>

import axios from 'axios'; 

export default {
    name: 'ApiCall',
    data() {
        return {
            data: null,
            error: null
        };
    },
    mounted() {
        axios.get('http://localhost:8000/api/welcome')
            .then( response => {
                this.data = response.data.msg;
            } ) 
            .catch ( error => {
                this.error = error;
                console.error('API error: ', error);
            } );
    }
};

</script>