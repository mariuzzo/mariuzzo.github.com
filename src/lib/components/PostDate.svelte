<script lang="ts">
  import { onMount } from 'svelte'

  let { date }: { date: string } = $props()

  const AUTHOR_TZ = 'America/Santo_Domingo'

  const parsedDate = $derived(new Date(date))

  const ssrFormatted = $derived(
    new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: AUTHOR_TZ
    }).format(parsedDate)
  )

  let clientFormatted = $state<string | null>(null)
  let clientTooltip = $state<string | null>(null)

  onMount(() => {
    clientFormatted = new Intl.DateTimeFormat(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(parsedDate)

    clientTooltip = new Intl.DateTimeFormat(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      timeZoneName: 'long'
    }).format(parsedDate)
  })
</script>

<time datetime={date} title={clientTooltip ?? undefined}
  >{clientFormatted ?? ssrFormatted}</time
>
