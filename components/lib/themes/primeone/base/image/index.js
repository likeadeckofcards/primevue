export default {
    css: ({ dt }) => `
.p-image-mask {
    display: flex;
    align-items: center;
    justify-content: center;
    --p-mask-background: ${dt('image.mask.background')};
}

.p-image-preview-container {
    position: relative;
    display: inline-flex;
    line-height: 0;
}

.p-image-preview-indicator {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
    border: 0 none;
    padding: 0;
    cursor: pointer;
    background: transparent;
    color: ${dt('image.preview.indicator.color')};
    transition: background-color ${dt('transition.duration')};
}

.p-image-preview-container:hover > .p-image-preview-indicator {
    opacity: 1;
    cursor: pointer;
    background: ${dt('image.preview.indicator.background')};
}

.p-image-preview-icon {
    width: 1.5rem;
    height: 1.5rem;
}

.p-image-toolbar {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    z-index: 1;
    padding: 1rem;
    gap: 0.5rem;
}

.p-image-action {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: ${dt('image.action.color')};
    background: transparent;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    outline-color: transparent;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
}

.p-image-action:hover {
    color: ${dt('image.action.hover.color')};
    background: ${dt('image.action.hover.background')};
}

.p-image-action:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-image-action .p-icon {
    font-size: 1.5rem;
    width: 1.5rem;
    height: 1.5rem;
}

.p-image-action.p-disabled {
    pointer-events: auto;
}

.p-image-preview {
    transition: transform 0.15s;
    max-width: 100vw;
    max-height: 100vh;
}

.p-image-preview-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}

.p-image-preview-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.p-image-preview-enter-from,
.p-image-preview-leave-to {
    opacity: 0;
    transform: scale(0.7);
}
`
};