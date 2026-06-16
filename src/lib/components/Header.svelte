<nav class="header">
  <div class="brand">
    <a class="brand-link" href="/"><span>M</span>ariuzzo</a>
  </div>
  <div class="nav">
    <ul class="nav-menu">
      <li class="nav-menu-item nav-menu-item--home">
        <a class="nav-menu-link" href="/">Home</a>
      </li>
      <li class="nav-menu-item">
        <a class="nav-menu-link" href="/code">Code</a>
      </li>
      <li class="nav-menu-item">
        <a class="nav-menu-link" href="/lymphoma">Lymphoma</a>
      </li>
      <li class="nav-menu-item">
        <a class="nav-menu-link" href="/about">About</a>
      </li>
    </ul>
  </div>
</nav>

<style>
  .header {
    display: grid;
    grid-template-columns: auto 1fr;
    row-gap: 2rem;
    align-items: center;
    margin: 1rem 0 2rem 0;
  }

  .brand {
    grid-row: 1;
    grid-column: 1 / 3;
    display: grid;
    justify-content: center;
  }

  .brand-link {
    color: var(--color-copy);
    text-decoration: none;
    font-weight: var(--font-weight-black);
    font-size: var(--font-size-l2);
    line-height: 1.25em;
    margin: 0;
  }

  .brand-link > span {
    display: inline-block;
    width: 1.25em;
    height: 1.25em;
    margin-right: 0.05em;
    background-color: var(--color-copy);
    color: var(--color-background);
    text-align: center;
    border-radius: 1px;
  }

  .nav {
    grid-row: 2;
    grid-column: 1 / 3;
    display: grid;
    justify-content: center;
  }

  .nav-menu {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: grid;
    column-gap: 2em;
    grid-template-columns: repeat(3, auto);
  }

  .nav-menu-item--home {
    display: none;
  }

  .nav-menu-link {
    color: var(--color-link);
    text-underline-offset: 3px;
    text-decoration-thickness: 2px;
  }

  .nav-menu-link:hover {
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }

  @media (min-width: 992px) {
    .header {
      margin: 2rem 0;
    }

    .brand {
      grid-column: 1 / 1;
    }

    .nav {
      grid-row: 1;
      grid-column: 2;
      justify-content: end;
    }

    .nav-menu {
      grid-template-columns: repeat(4, auto);
    }

    .nav-menu-item--home {
      display: block;
    }
  }
</style>
