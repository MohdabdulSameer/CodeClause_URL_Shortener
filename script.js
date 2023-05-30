function shortenUrl() {
    const longUrl = document.getElementById('link').value;
    const endpoint = 'https://api-ssl.bitly.com/v4/shorten';

    fetch(endpoint, {
        method: 'POST',
        headers: {
            Authorization: 'Bearer 7badb97448932f169c771d389cb6308cf9e5af41',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            long_url: longUrl,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            const shortUrl = data.link;
            document.getElementById('output').innerHTML = shortUrl;
        })
        .catch((error) => console.error(error));
}

function copyToClipboard() {
    const output = document.getElementById("output");
    const textArea = document.createElement("textarea");
    textArea.value = output.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Copied to clipboard!");
}