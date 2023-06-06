<template>
    <div class="flex flex-col bg-[#f8f8f8] gap-2">
        <a v-for="menu in menus" :key="menu.icon" href="#" class="p-3 text-slate-700 hover:text-slate-200 transition-all duration-300 hover:bg-slate-700">
            <span class="w-8 h-8 flex items-center justify-center">
                <span class="material-symbols-outlined text-3xl">
                    {{ menu.icon }}
                </span>
            </span>
        </a>
    </div>
</template>

<script>
export default {
    name: "SideNav",
    data(){
        return {
            menus: [
                {icon: 'search'},
                {icon: 'home'},
                {icon: 'analytics'},
                {icon: 'file_copy'},
                {icon: 'people'},
                {icon: 'settings'},
            ]
        }
    }
}
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>