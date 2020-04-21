function Convert() {
    var x = document.getElementById("hours").value;
    var y = document.getElementById("minutes").value;
    var z = ((+x*60) + +y)/60;
    var numb = z;
    numb = +numb.toFixed(2);
    document.getElementById("decimal").innerHTML = numb;
}

var clipboard = new ClipboardJS('.btn');

    clipboard.on('success', function(e) {
        console.info('Action:', e.action);
        console.info('Text:', e.text);
        console.info('Trigger:', e.trigger);

        e.trigger.textContent = 'Copied!';
        window.setTimeout(function() {
        e.trigger.textContent = 'Copy';
        }, 2000);
    });

    clipboard.on('error', function(e) {
        console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
    });