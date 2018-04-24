<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
    </div>

    <div class="container-heading col-md-12">
      <h1 class="animated lightSpeedIn"><span class="heading">
        <span color style="color:dodgerblue">K</span>
        <span color style="color:red">a</span>
        <span color style="color:darkorange">n</span>
        <span color style="color:dodgerblue">b</span>
        <span color style="color:green">a</span>
        <span color style="color:red">n</span>
      </span></h1>
      <i class="heading-form fas fa-plus-circle animated lightSpeedIn" data-toggle="modal" data-target="#exampleModal"></i>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="formGroupExampleInput">PIC Name:</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Input name..." v-model="name">
              </div>

              <div class="form-group">
                <label for="exampleSelect1">Job Status:</label>
                <select class="form-control" id="exampleSelect1" v-model="status">
                  <option value="todo">To Do</option>
                  <option value="doing">Doing</option>
                  <option value="done">Done</option>
                </select>
              </div>

              <div class="form-group">
                <label for="formGroupExampleInput2">Job Description:</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Input detail job description..." v-model="todos">
              </div>

            </form>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button class="btn btn-primary" @click="submitTodo()" data-dismiss="modal">Save</button>
              </div>
          </div>
        </div>
      </div>
    </div>

    <div class="kanban-container col-md-12">
      <div class="col-md-4">
        <div class="kanban-item-todo-heading col-md-12">
          <p class="kanban-heading animated swing">TO DO</p>
        </div>
        <div class="kanban-item-todo col-md-12">
          <div v-for="people of person" v-bind:key="people['.key']">
            <div v-if="people.status == 'todo'">
              <div v-if="!people.edit" class="kanban-item-each animated slideInLeft">
                <p><span style="font-weight:bold">PIC Name:</span> {{ people.name }}</p>
                <p><span style="font-weight:bold">Job Status:</span> {{ people.status }}</p>
                <p><span style="font-weight:bold">Job Description:</span> {{ people.todos }}</p>
                <button @click="setEditTodo(people['.key'])">Edit</button>
                <button @click="removeTodo(people['.key'])">Remove</button>
              </div>
              <div v-else>
                <div class="kanban-item-each">
                  <label><span style="font-weight:bold">PIC Name:</span></label>
                  <input class="input-name" type="text" v-model="people.name" style="width:100%"/>
                  <br>
                  <label><span style="font-weight:bold">Job Status:</span></label>
                  <select class="input-status" v-model="people.status" style="width:100%">
                    <option value="todo">To Do</option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                  </select>
                  <br>
                  <label><span style="font-weight:bold">Job Description:</span></label>
                  <input class="input-todo" type="text" v-model="people.todos" style="width:100%" />
                  <br>
                  <div>
                    <button @click="saveEdit(people)">Save</button>
                    <button @click="cancelEdit(people['.key'])">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="kanban-item-doing-heading col-md-12">
          <p class="kanban-heading animated swing">DOING</p>
        </div>
        <div class="kanban-item-doing col-md-12">
          <div v-for="people of person" v-bind:key="people['.key']">
            <div v-if="people.status == 'doing'">
              <div v-if="!people.edit" class="kanban-item-each animated bounce">
                <p><span style="font-weight:bold">PIC Name:</span> {{ people.name }}</p>
                <p><span style="font-weight:bold">Job Status:</span> {{ people.status }}</p>
                <p><span style="font-weight:bold">Job Description:</span> {{ people.todos }}</p>
                <button @click="setEditTodo(people['.key'])">Edit</button>
                <button @click="removeTodo(people['.key'])">Remove</button>
              </div>
              <div v-else>
                <div class="kanban-item-each">
                  <label><span style="font-weight:bold">PIC Name:</span></label>
                  <input class="input-name" type="text" v-model="people.name" style="width:100%"/>
                  <br>
                  <label><span style="font-weight:bold">Job Status:</span></label>
                  <select class="input-status" v-model="people.status" style="width:100%">
                    <option value="todo">To Do</option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                  </select>
                  <br>
                  <label><span style="font-weight:bold">Job Description: </span></label>
                  <input class="input-todo" type="text" v-model="people.todos" style="width:100%" />
                  <div>
                    <button @click="saveEdit(people)">Save</button>
                    <button @click="cancelEdit(people['.key'])">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="kanban-item-done-heading col-md-12">
          <p class="kanban-heading animated swing">DONE</p>
        </div>
        <div class="kanban-item-done col-md-12">
          <div v-for="people of person" v-bind:key="people['.key']">
            <div v-if="people.status == 'done'">
              <div v-if="!people.edit" class="kanban-item-each animated slideInRight">
                <p><span style="font-weight:bold">PIC Name:</span> {{ people.name }}</p>
                <p><span style="font-weight:bold">Job Status:</span> {{ people.status }}</p>
                <p><span style="font-weight:bold">Job Description:</span> {{ people.todos }}</p>
                <button @click="setEditTodo(people['.key'])">Edit</button>
                <button @click="removeTodo(people['.key'])">Remove</button>
              </div>
              <div v-else>
                <div class="kanban-item-each">
                  <label><span style="font-weight:bold">PIC Name:</span></label>
                  <input class="input-name" type="text" v-model="people.name" style="width:100%"/>
                  <br>
                  <label><span style="font-weight:bold">Job Status:</span></label>
                  <select class="input-status" v-model="people.status" style="width:100%">
                    <option value="todo">To Do</option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                  </select>
                  <br>
                  <label><span style="font-weight:bold">Job Description:</span></label>
                  <input class="input-todo" type="text" v-model="people.todos" style="width:100%" />
                  <br>
                  <div>
                    <button @click="saveEdit(people)">Save</button>
                    <button @click="cancelEdit(people['.key'])">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-copyright py-3 text-center animated rubberBand">
      © 2018 Copyright:
      <a href=""> Kanbanoichi.com </a>
    </div>

    <router-view/>

  </div>
</template>

<script>
import { namesRef } from './assets/js/firebase'

export default {
  // name: 'app',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App,'
      name: '',
      status: '',
      todos: ''
    }
  },
  firebase: {
    person: namesRef
  },
  methods: {
    submitTodo () {
      namesRef.push({ name: this.name, status: this.status, todos: this.todos, edit: false })
      this.name = ''
      this.status = ''
      this.todos = ''
    },
    removeTodo (key) {
      namesRef.child(key).remove()
    },
    setEditTodo (key) {
      namesRef.child(key).update({ edit: true })
    },
    cancelEdit (key) {
      namesRef.child(key).update({ edit: false })
    },
    saveEdit (person) {
      const key = person['.key']
      namesRef.child(key).set({ name: person.name, status: person.status, todos: person.todos, edit: false })
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Bangers|Changa|Faster+One|Graduate|Press+Start+2P');

.container-heading {
  display: flex;
}

.heading-form {
  align-self: center;
  margin-top: 1vw;
  margin-left: 1vw;
  font-size: 7vw;
  color:skyblue;
}

.heading {
  font-size: 10vw;
  margin-left: 3vw;
  font-family: 'Faster One', cursive;
}

/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */

button {
  background-color: transparent;
  border: 1px solid black;
  border-radius: 5px;
  font-weight: bold;
  margin-left: 10px;
  padding: 5px;
}

.input-form {
  border: 1px solid red;
}

.user-container {
  border: 1px solid blue;
}

.user-item {
  border: 1px solid gold;
}

.kanban-container-heading {
  /* border: 3px solid black; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.kanban-heading {
  font-family: 'Press Start 2P', cursive;
  display: flex;
  justify-content: center;
  align-self: center;
}

.kanban-item-todo-heading {
  /* border: 10px solid red; */
  border-radius: 50px;
  margin: 0px;
  text-align: center;
  align-self: center;
  color: red;
  font-size: 2vw;
}

.kanban-item-doing-heading {
  /* border: 10px solid darkorange; */
  border-radius: 50px;
  text-align: center;
  align-self: center;
  color: darkorange;
  font-size: 2vw;
}

.kanban-item-done-heading {
  /* border: 10px solid green; */
  border-radius: 50px;
  margin: 0px;
  text-align: center;
  align-self: center;
  color: green;
  font-size: 2vw;
}

.kanban-container {
  /* border: 3px solid black; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.kanban-item-todo {
  border: 10px solid red;
  border-radius: 50px;
  margin: 0px;
  /* height: 500px; */
}

.kanban-item-doing {
  border: 10px solid darkorange;
  border-radius: 50px;
  margin: 0px;
  /* height: 500px; */
}

.kanban-item-done {
  border: 10px solid green;
  border-radius: 50px;
  margin: 0px;
  /* height: 500px; */
}

.kanban-item-each {
  border: 3px solid lightsteelblue;
  border-radius: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 20px;
}

.heading-form:hover {
  animation: shake 0.5s;
  animation-iteration-count: infinite;
}

@keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
}

</style>
