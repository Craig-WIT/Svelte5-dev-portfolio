<script>
  import { HeroSection, AboutMeSection, MyWorkSection } from "$components";

  const { data } = $props();

  console.log(data)

  let { workExperience, projects } = data;

</script>

<HeroSection></HeroSection>
<AboutMeSection { workExperience }></AboutMeSection>
<MyWorkSection {projects}></MyWorkSection>