# render2katex
a small node.js snippet to render LaTeX into KaTeX HTML by KaTeX

# Install

First install node.js.

Clone this repo.

run `npm install --production` at the local repo.

# Usage

`echo "f(x)=\sin(x)" | node index.js d`

The parameter can be `i`(inline) or `d`(display) corresponding to KaTeX modes.

Result:

```
<span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mi>sin</mi><mo>(</mo><mi>x</mi><mo>)</mo></mrow><annotation encoding="application/x-tex">f(x)=\sin(x)
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.75em;"></span><span class="strut bottom" style="height:1em;vertical-align:-0.25em;"></span><span class="base textstyle uncramped"><span class="mord mathit" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathit">x</span><span class="mclose">)</span><span class="mrel">=</span><span class="mop">sin</span><span class="mopen">(</span><span class="mord mathit">x</span><span class="mclose">)</span></span></span></span>
```
