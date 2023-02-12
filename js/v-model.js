const { createApp } = Vue

const options = {
    template: `
        <h1>v-model Them All!</h1>
        <section class="form-demo">

            <fieldset>
                <legend>Text Area</legend>
                <textarea v-model="message" placeholder="add multiple lines"></textarea>
            </fieldset>
            
            <fieldset>
                <legend>Check Boxes</legend>
                <input type="checkbox" value="Jack" v-model="checkedNames" /> Jack
                <input type="checkbox" value="John" v-model="checkedNames" /> John
                <input type="checkbox" value="Joe" v-model="checkedNames" /> Joe
                <input type="checkbox" value="Jane" v-model="checkedNames" /> Jane
            </fieldset>
            
            <fieldset>
                <legend>Radio Buttons</legend>
                <input type="radio" value="Cat" v-model="picked"> Cat
                <input type="radio" value="Dog" v-model="picked"> Dog
                <input type="radio" value="Fish" v-model="picked"> Fish
                <input type="radio" value="Parrot" v-model="picked"> Parrot
            </fieldset>
            
            <fieldset>
                <legend>Single Select</legend>
                <select v-model="selected">
                    <option>All good</option>
                    <option>Something nice</option>
                    <option>Anything goes</option>
                </select>
            </fieldset>
            
            <fieldset>  
                <legend>Multi Select</legend>
                <select v-model="multiSelected" multiple>
                    <option>Knowledge is overrated</option>
                    <option>Truth will prevail</option>
                    <option>Love will save our souls</option>
                </select>
            </fieldset>
            
            <button type="submit" :disabled="!isValid">Save</button> 
            
            <pre>{{$data}}</pre>           
        </section>
    `,
    data() {
        return {
            message: '',
            checkedNames: [],
            picked: '',
            selected: '',
            multiSelected: [],
        }
    },
    computed: {
        isValid() {
            return !!this.message.length
        }
    }
}

const app = createApp(options)
app.mount('#app')