<script lang="ts">
    import type { Snippet } from "svelte";

    interface SectionHeaderProps {
        children: Snippet,
        sectionName: string,
    }

    let { children, sectionName }:SectionHeaderProps = $props();
</script>

<div class="default-margin mt-l">
    <h2 id={sectionName}>{@render children()}</h2>
    <div class="underscore"></div>
</div>


