<script lang="ts">
    import type { LANGUAGES } from '@/types/config.ts'
    import { VI_LANGUAGE, EN_LANGUAGE } from '@constants/constants.ts'
    import I18nKey from '@i18n/i18nKey'
    import { i18n } from '@i18n/translation'
    import Icon from '@iconify/svelte'
    import {
      getStoredLanguage,
      setLanguage,
    } from '@utils/setting-utils.ts'
    import { onMount } from 'svelte'
    
    const seq: LANGUAGES[] = [VI_LANGUAGE, EN_LANGUAGE]
    let lang: LANGUAGES = VI_LANGUAGE
    
    onMount(() => {
        lang = getStoredLanguage()
    })
    
    function switchScheme(newMode: LANGUAGES) {
        lang = newMode
      setLanguage(newMode)
    }
    
    function toggleScheme() {
      let i = 0
      for (; i < seq.length; i++) {
        if (seq[i] === lang) {
          break
        }
      }
      switchScheme(seq[(i + 1) % seq.length])
    }
    
    function showPanel() {
      const panel = document.querySelector('#light-dark-lang-panel')
      panel.classList.remove('float-panel-closed')
    }
    
    function hidePanel() {
      const panel = document.querySelector('#light-dark-lang-panel')
      panel.classList.add('float-panel-closed')
    }
    </script>
    
    <!-- z-50 make the panel higher than other float panels -->
    <div class="relative z-50" role="menu" tabindex="-1" on:mouseleave={hidePanel}>
        <button aria-label="Light/Dark Mode" role="menuitem" class="relative btn-plain scale-animation rounded-lg h-11 w-11 active:scale-90" id="scheme-switch" on:click={toggleScheme} on:mouseenter={showPanel}>
            <div class="absolute" class:opacity-0={lang !== VI_LANGUAGE}>
                <Icon icon="material-symbols:language-gb-english" class="text-[1.25rem]"></Icon>
            </div>
            <div class="absolute" class:opacity-0={lang !== EN_LANGUAGE}>
                <Icon icon="material-symbols:language-us" class="text-[1.25rem]"></Icon>
            </div>
        </button>
    
        <div id="light-dark-lang-panel" class="hidden lg:block absolute transition float-panel-closed top-11 -right-2 pt-5" >
            <div class="card-base float-panel p-2">
                <button class="flex transition whitespace-nowrap items-center justify-start w-full btn-plain scale-animation rounded-lg h-9 px-3 font-medium active:scale-95 mb-0.5"
                        class:current-theme-btn={lang === VI_LANGUAGE}
                        on:click={() => switchScheme(VI_LANGUAGE)}
                >
                    <Icon icon="material-symbols:language-gb-english" class="text-[1.25rem] mr-3"></Icon>
                    {i18n(I18nKey.viMode)}
                </button>
                <button class="flex transition whitespace-nowrap items-center justify-start w-full btn-plain scale-animation rounded-lg h-9 px-3 font-medium active:scale-95 mb-0.5"
                        class:current-theme-btn={lang === EN_LANGUAGE}
                        on:click={() => switchScheme(EN_LANGUAGE)}
                >
                    <Icon icon="material-symbols:language-us" class="text-[1.25rem] mr-3"></Icon>
                    {i18n(I18nKey.enMode)}
                </button>
            </div>
        </div>
    </div>
    
    <style lang="css">
    .current-setting {
        background: var(--btn-plain-bg-hover);
        color: var(--primary);
    }
    </style>