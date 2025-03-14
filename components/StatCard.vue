<script setup lang="ts">

type CssPropVal = Record<string, string | string[] | Record<string, string>>

type CssPropType = {
    container?: CssPropVal;
    headline?: CssPropVal;
    headlineSpan?: CssPropVal;
    title?: CssPropVal;
    text?: CssPropVal
}

type StatCardProps = {
    headline?: string;
    headlineEl?: 'h3' | 'h4' | 'p';
    title?: string;
    text?: string;
    cssClasses?: CssPropType
}

const { 
    headline, 
    headlineEl = 'h3',
    title, 
    text, 
    cssClasses = {
        'container': 'flex flex-col place-content-between bg-white rounded shadow p-6',
        'headline': 'flex flex-col text-4xl md:text-[clamp(var(--text-4xl),3cqi,var(--text-6xl))] font-semibold mb-2 leading-[1]',
        'headlineSpan': ['text-primary'],
        'title': 'text-[0.375em] text-primary-dark',
        'text': ['text-gray-600']
    }
} = defineProps<StatCardProps>()

</script>

<template>

<div :class="cssClasses?.container">
    <slot name="headline" :styles="cssClasses">
        <component :is="headlineEl" :class="cssClasses?.headline">
            <span :class="cssClasses?.headlineSpan">{{ headline }}</span> <span :class="cssClasses?.title">{{ title }}</span>
        </component>
    </slot>
    <slot name="text" :cssClasses="cssClasses">
        <p :class="cssClasses?.text" v-html="text"></p>
    </slot>
</div>  

</template>

<style scoped>

*:empty {
    display: none;
}

</style>