<script>
  import { HeroSection, AboutMeSection, MyWorkSection, SkillsSection, ContactSection } from "$components";

  const { data } = $props();

  let { workExperience, projects, skills } = data;

</script>

<HeroSection></HeroSection>
<AboutMeSection { workExperience }></AboutMeSection>
<MyWorkSection {projects}></MyWorkSection>
<SkillsSection {skills}></SkillsSection>
<ContactSection></ContactSection>