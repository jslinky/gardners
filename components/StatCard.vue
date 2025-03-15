<script setup lang="ts">

import type { ClassValue } from "clsx"

type CssPropType = {
    container?: ClassValue;
    headline?: ClassValue;
    headlineSpan?: ClassValue;
    title?: ClassValue;
    text?: ClassValue
}

type StatCardProps = {
    headline?: string;
    headlineEl?: 'h3' | 'h4' | 'p';
    title?: string;
    text?: string;
    cssClasses?: CssPropType
}


const defaultStyles = {
    'container': 'flex flex-col place-content-between bg-white rounded shadow p-6 text-[clamp(var(--text-4xl),7cqi,var(--text-6xl))]',
    'headline': 'flex flex-col font-semibold mb-2 leading-[1]',
    'headlineSpan': ['text-primary'],
    'title': 'text-[0.375em] text-primary-dark',
    'text': ['text-gray-600 text-[clamp(var(--text-xs),0.375em,var(--text-base))]']
}

const { 
    headline, 
    headlineEl = 'h3',
    title, 
    text, 
    cssClasses
} = defineProps<StatCardProps>()

</script>

<template>

<div :class="cn(defaultStyles.container, cssClasses?.container)">
    <slot name="headline" :styles="defaultStyles">
        <component :is="headlineEl" :class="cn(defaultStyles.headline, cssClasses?.headline)">
            <span :class="cn(defaultStyles.headlineSpan, cssClasses?.headlineSpan)">{{ headline }}</span> <span :class="cn(defaultStyles.title, cssClasses?.title)">{{ title }}</span>
        </component>
    </slot>
    <slot name="text" :cssClasses="defaultStyles.text">
        <p :class="cn(defaultStyles.text, cssClasses?.text)" v-html="text"></p>
    </slot>
</div>  

</template>

<style scoped>

*:empty {
    display: none;
}

</style>