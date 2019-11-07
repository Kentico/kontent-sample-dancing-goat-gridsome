<template>
  <Layout>
    <div class="container">
      <div class="container product-page-container">
        <nav role="navigation" class="sub-menu row">
          <div class="store-menu-list row">
            <ul>
              <li>
                <g-link :to="`/store/coffees`">Coffees</g-link>
              </li>
              <li>
                <g-link :to="`/store/brewers`">Brewers</g-link>
              </li>
            </ul>
          </div>
        </nav>
        <div class="product-page row">
          <div class="flex">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>