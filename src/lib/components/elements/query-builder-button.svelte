<script lang="ts">
    export let variableName: string;

    export let callbackAddVariableToContainer: (arg: string) => void;
    export let callbackRemoveVariableFromContainer: (arg: string) => void;
    let btnState = false;

    function handleCallback() {
        if (!btnState) {
            callbackAddVariableToContainer(variableName);
            btnState = true;
        }
        else if (btnState) {
            callbackRemoveVariableFromContainer
            btnState = false;
        }
    }

    $: btnState;
</script>

<button class={btnState ? 'selected' : 'unselected'} on:click={handleCallback}>
    {variableName}
</button>
