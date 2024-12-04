<script>
  import { HeroSection } from "$components";
  import AboutMeSection from "$components/Sections/AboutMeSection.svelte";

  const { data } = $props();

  console.log(data)
  console.log(data.workExperience)

  let workExperience = data.workExperience;
</script>

<HeroSection></HeroSection>
<AboutMeSection { workExperience }></AboutMeSection>