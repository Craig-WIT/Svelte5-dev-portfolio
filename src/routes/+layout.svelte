<script lang="ts">
    import Header from '$components/Header.svelte';
    import '../app.css'

    let {children} = $props();
</script>

<Header></Header>
{@render children()}