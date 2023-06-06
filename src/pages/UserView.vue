<template>
    <div class="flex-grow p-12 text-slate-800 flex flex-col gap-2 relative">
        <div class="rounded bg-slate-200 px-3 py-1 text-xs font-light flex flex-row gap-2 ml-auto absolute right-12 top-4">
            <span>Home</span>
            <span>/</span>
            <span>Master</span>
            <span>/</span>
            <span>User</span>
            <span>/</span>
            <span>Settings</span>
            <span>/</span>
            <span>Details</span>
        </div>
        <h1 class="font-semibold text-2xl w-full pb-3 border-b border-slate-300">
            USER
        </h1>
        <h2 class="uppercase flex flex-row justify-between items-center text-lg mt-5">
            Details
        </h2>

        <p class="text-2xl font-light flex flex-row items-center w-full justify-between mt-4 border-b border-slate-300 pb-3">
            Information
            <span class="bg-slate-200 material-symbols-outlined text-xl w-12 h-8 flex items-center justify-center rounded text-center">
                settings
            </span>
        </p>
        <table v-if="user" class="table">
            <tr>
                <th>Username</th>
                <td>{{ user.name }}</td>
            </tr>
            <tr>
                <th>Username</th>
                <td>{{ user.name }}</td>
            </tr>
            <tr>
                <th>Gender</th>
                <td>{{ user.gender }}</td>
            </tr>
            <tr>
                <th>Email</th>
                <td>{{ user.email }}</td>
            </tr>
            <tr>
                <th>Phone</th>
                <td>{{ user.phone }}</td>
            </tr>
        </table>
        <div class="ml-auto mt-4">
            <router-link to="/" class="px-5 py-2 rounded bg-slate-800 hover:bg-slate-700 transition text-slate-50">
                Back
            </router-link>
        </div>
    </div>
</template>

<script>
import users from '../data/user-data';
export default {
    name: "UserView",
    data(){
        return {
            user: users.find(u => `${u.id}` === this.$route.params.id)
        }
    }
}
</script>
