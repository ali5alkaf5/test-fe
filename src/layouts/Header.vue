<template>
    <div class="flex flex-row border-b border-b-slate-300">
        <a class="cursor-pointer p-3 bg-slate-800 text-slate-50">
            <span class="material-symbols-outlined text-3xl">
                menu
            </span>
        </a>
        <div class="p-3 ml-1">
            <span class="material-symbols-outlined text-3xl">
                image
            </span>
        </div>
        <div class="ml-auto flex flex-row gap-4 items-center mr-3">
            <div class="text-right">
                <p class="text-base font-normal">
                    RENEE MCKELVEY
                </p>
                <p class="text-sm font-light">
                    Account Settings
                </p>
            </div>
            <div class="rounded-full w-10 h-10 border border-slate-300 flex items-center justify-center">
                <span class="material-symbols-outlined text-xl">
                    person
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
}
</script>