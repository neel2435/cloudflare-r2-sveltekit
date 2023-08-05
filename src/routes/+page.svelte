<script>
    //** @type {import('./$types').PageData} */
    /** @type {string} */
    export let data;
    console.log(data);
    let newArray = []; // Array to store characters
    for (let i = 0; i < data.length; i++) {
         newArray.push(data[i]); // Push each character into the array
    }

    let reconstructedString = newArray.join(''); // Join the array into a single string
    console.log(reconstructedString);
</script>


{@html reconstructedString}
