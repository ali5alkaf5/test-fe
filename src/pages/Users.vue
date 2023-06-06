<template>
    <div class="flex-grow p-12 text-slate-800 flex flex-col gap-2 relative">
        <div class="rounded bg-slate-200 px-3 py-1 text-xs font-light flex flex-row gap-2 ml-auto absolute right-12 top-4">
            <span>Home</span>
            <span>/</span>
            <span>Master</span>
            <span>/</span>
            <span>User</span>
        </div>
        <h1 class="font-semibold text-2xl w-full pb-3 border-b border-slate-300">
            USER
        </h1>
        <h2 class="uppercase flex flex-row justify-between items-center text-lg">
            List
            <span class="bg-slate-200 material-symbols-outlined text-xl w-12 h-8 flex items-center justify-center rounded text-center">
                settings
            </span>
        </h2>
        <div class="flex flex-row items-center">
            <label class="relative flex items-center rounded border w-fit">
                <span class="material-symbols-outlined w-8 flex items-center justify-center pl-1">
                    search
                </span>
                <input type="search" @input="setSearchTerm" name="search" class="px-3 py-2" placeholder="Search" autocomplete="off"/>
            </label>
            <div class="ml-auto flex gap-2">
                <span class="flex flex-row items-center justify-center p-1 cursor-pointer material-symbols-outlined rounded shadow-sm text-slate-50 bg-slate-800 hover:bg-slate-900 transition-all">
                    archive
                </span>
                <span class="flex flex-row items-center justify-center p-1 px-4 cursor-pointer text-sm rounded shadow-sm text-slate-50 bg-slate-800 hover:bg-slate-900 transition-all">
                    Invite User
                </span>
            </div>
        </div>
        <table v-if="paginatedUsers.length" class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in paginatedUsers" :key="user.id">
                    <td class="uppercase"><router-link :to="'/' + user.id" class="cursor-pointer text-sky-500 hover:text-sky-600">{{ user.name }}</router-link></td>
                    <td>{{ user.email }}</td>
                    <td class="uppercase">{{ user.gender }}</td>
                </tr>
            </tbody>
        </table>
        <div class="w-full h-64 flex items-center justify-center text-red-500" v-else="!paginatedUsers.length">
            you don't have user data
        </div>
        <div class="ml-auto flex flex-col mt-8">
            <div class="flex flex-row rounded border border-slate-300 text-slate-800">
                <div @click="prevPage" class="cursor-pointer w-8 h-8 text-center flex justify-center items-center border-r border-slate-300 font-semibold text-slate-800 bg-slate-50 hover:bg-slate-600 hover:text-slate-50">
                    <span class="material-symbols-outlined text-sm">
                        keyboard_double_arrow_left
                    </span>
                </div>
                <div v-for="page in pages" @click="setPage(page)" :key="page" :class="'cursor-pointer  border-r border-slate-300 w-8 h-8 text-center flex justify-center items-center text-sm font-semibold ' + (page === currentPage? 'text-slate-300 bg-slate-800': 'text-slate-800 bg-slate-50 hover:bg-slate-600 hover:text-slate-50 transition-all')">
                    {{ page }}
                </div>
                <div @click="nextPage" class="cursor-pointer w-8 h-8 text-center flex justify-center items-center text-sm font-semibold text-slate-800 bg-slate-50 hover:bg-slate-600 hover:text-slate-50">
                    <span class="material-symbols-outlined text-sm">
                        double_arrow
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import users from '../data/user-data';
export default {
    name: "Users",
    data(){
        return {
            users: users,
            searchTerm: '',
            perPage: 10,
            currentPage: 1,
        }
    },
    watch: {
        filteredUsers(newVal){
            let totalPages = Math.floor((newVal.length - 1) / this.perPage + 1);
            if(totalPages < this.currentPage){
                this.currentPage = 1;
            }
        }
    },
    computed: {
        paginatedUsers(){
            let start = (this.currentPage - 1) * this.perPage;
            let end = (this.currentPage) * this.perPage;
            return this.filteredUsers.slice(start, end);
        },
        filteredUsers(){
            let self = this;
            return this.users.filter(u => {
                let arr = [u.name.toLowerCase(), u.email.toLowerCase()];
                return arr.some(a => a.includes(self.searchTerm));
            })
        },
        pages(){
            let totalPages = Math.floor((this.filteredUsers.length - 1) / this.perPage + 1);
            let pages = [];
            while(totalPages > 0){
                pages.unshift(totalPages);
                totalPages--;
            }
            return pages;
        }
    },
    methods: {
        setSearchTerm(e){
            this.searchTerm = e.target.value;
        },
        setPage(page){
            this.currentPage = page;
        },
        nextPage(){
            let totalPages = Math.floor((this.filteredUsers.length - 1) / this.perPage + 1);
            if(this.currentPage < totalPages){
                this.currentPage = this.currentPage + 1;
            }
        },
        prevPage(){
            if(this.currentPage > 1){
                this.currentPage = this.currentPage - 1;
            }
        }
    }
}
</script>

<style>
</style>