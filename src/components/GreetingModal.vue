<template>
  <div v-if="showModal">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                        aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="mb-3">
                  <label for="name" class="form-label">Name</label>
                  <input v-model="name" type="text" class="form-control" id="name">
                </div>
                <select v-model="role" class="form-select">
                  <option :key="role.name" v-for="role in roles" :value="role.name">
                    {{ role.name }}
                  </option>
                </select>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" @click="showModal = false">
                  Close
                </button>
                <button :disabled="!name" @click="save" type="button" class="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import roles from '../roles.json';

export default {
  name: 'GreetingModal',
  data() {
    return {
      showModal: false,
      roles,
      role: '',
      name: '',
    };
  },
  methods: {
    open() {
      this.showModal = true;
    },
    save() {
      localStorage.name = this.name;
      localStorage.role = this.role;
      this.showModal = false;
      // document.location.reload();
    },
  },
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>
