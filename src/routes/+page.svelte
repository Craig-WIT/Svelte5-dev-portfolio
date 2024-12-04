<script>
  import { HeroSection } from "$components";
  import ExperienceTable from "$components/ExperienceTable.svelte";
  import AboutMeSection from "$components/Sections/AboutMeSection.svelte";

  const { data } = $props();

  console.log(data)
</script>

<HeroSection></HeroSection>
<AboutMeSection></AboutMeSection>
<ExperienceTable></ExperienceTable>
