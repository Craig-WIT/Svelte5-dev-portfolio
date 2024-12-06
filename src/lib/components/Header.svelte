<script lang="ts">
  import { goto } from "$app/navigation";
  import Button from "./Button.svelte";

  function goToContactForm() {
    goto('/#contact-form')
  }

</script>

<navbar class="navbar default-margin">
  <a href="/" class="logo">CG</a>
  <div class="navbar-links">
    <a href="/#about-me" class="navlink">About Me</a>
    <a href="/#my-work" class="navlink">Work</a>
    <Button className="nav-bar" onclick={goToContactForm}>Contact</Button>
  </div>
</navbar>

<style>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }

  .logo {
    font-size: 35px;
    font-weight: bold;
  }

  .navbar-links {
    display: flex;
    align-items: center;
    gap: 60px;
  }

  .nav-link:hover {
    text-decoration: underline;
  }
</style>
