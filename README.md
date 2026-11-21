# prompt-tidy

A Claude Code / Claude Desktop mod that adds a **✨ Tidy prompt** button directly above the prompt box. Click it and your typed or dictated draft is rewritten in place as a clearer, better-organized prompt. An **↩ Undo** button restores your original text.

## What the rewrite does

- Keeps everything you said and adds no requirements of its own
- Groups related points and puts them in a logical order
- Opens with a one-line goal, then adds short sections (Context, Requirements and constraints, Desired output) only where the content calls for them
- Removes filler words, repeats and false starts
- Keeps your wording and tone where it is already clear

Nothing is sent until you press Enter. Each rewrite makes one extra model call (Sonnet), which counts toward your usage.

## Install

In a terminal session of Claude Code:

```
/plugin install prompt-tidy --marketplace minhphamdxp3-dev/prompt-tidy
```

Answer `y` to add the marketplace, then pick the user scope.

From a regular terminal:

```
claude plugin install prompt-tidy --marketplace minhphamdxp3-dev/prompt-tidy
```

In the Claude desktop app: click **+** next to the prompt box, then **Plugins**, **Add marketplace** with `minhphamdxp3-dev/prompt-tidy`, then **Add plugin**.

To install from a local copy instead, use the folder's path as the marketplace source.

## Use

1. Type or dictate a draft in the prompt box.
2. Click **✨ Tidy prompt**.
3. Click **↩ Undo** to get your original back. Sending a prompt clears the undo.

## License

MIT
