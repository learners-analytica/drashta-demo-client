<button on:click={async () => {
    const res = await fetch(import.meta.env.VITE_ANALYTICS_PACKAGE_URL, { method: 'POST' });
}}>
    Test POST
</button>

<pre class="pre" id="response"></pre>
