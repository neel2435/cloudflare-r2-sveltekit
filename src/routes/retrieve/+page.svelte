<script>
    /** @type {import('./$types').PageData} */
    export let data;
    console.log(data);
    let reconstructedString = ''; // Initialize an empty string

    for (const charPosition in data) {
        if (data.hasOwnProperty(charPosition)) {
            reconstructedString += data[charPosition]; // Concatenate the character
        }
    }

console.log(reconstructedString);
</script>

<body>
{@html reconstructedString}
</body>

