
<script context="module">
    export const hydrate = false; // true makes it SSR, false turns it into SSG

    export async function load({page, fetch}) {
		const res = await fetch('data.json');
		return {
		    props: {
                offers: await res.json(),
                renderDate: new Date().toISOString(),
            }
		}
    }
</script>

<script>
    import {browser} from '$app/env';
    import Card from '../components/Card.svelte';

    export let offers;
    export let renderDate;
</script>

<svelte:head>
    <title>Products listing</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet"/>
</svelte:head>

<div class="text-center">
    <h1>Rendered {browser ? 'client-side' : 'server-side (SSR)'} at {renderDate}</h1>
</div>

<div class="container-fluid d-flex justify-content-center flex-wrap">
    {#each offers as offer}
        <Card {offer}/>
    {/each}
</div>
