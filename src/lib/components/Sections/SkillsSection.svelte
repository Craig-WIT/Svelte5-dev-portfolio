<script lang="ts">
  import SectionHeader from "$components/SectionHeader.svelte";

  interface SkillsSectionProps{
    skills: Skill[]
  }

  let { skills }:SkillsSectionProps = $props()

  const iconClasses = skills.map(({ iconClass }) => iconClass);

</script>

<SectionHeader sectionName={"my-skills"}>My Skills</SectionHeader>
<section class="wrapper default-margin">
  <div class="skills-container">
    {#each iconClasses as iconClass}
      <i class={iconClass}></i>
    {/each}       
  </div>
</section>


<style>
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .skills-container {
    width: 40%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 16px;
    column-gap: 10px;
  }

  i {
    font-size: 80px;
    color: black;
  }
</style>
