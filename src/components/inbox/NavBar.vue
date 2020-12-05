<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-button-group class="d-lg-none">
      <b-button v-b-toggle.sidebar-1 variant="light" ><b-icon-mailbox></b-icon-mailbox></b-button>
      <b-button variant="warning" v-b-modal.modal-scrollable ><b-icon-vector-pen></b-icon-vector-pen></b-button>
    </b-button-group>

      <!-- <b-navbar-brand :to="'group?url='+url">
        <b-button variant="dark"><b-icon-arrow-left></b-icon-arrow-left> GRoup</b-button>
      </b-navbar-brand> -->
      <b-navbar-brand >
        GRoupMail
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <SideBar :folder="folder" />
  </div>
</template>

<script>

export default {
  name: 'NavBar',
  props: ['url', 'folder'],
  components: {'SideBar': () => import('@/components/inbox/SideBar')}
}
</script>
