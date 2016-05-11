!function(){var t=Flotr.DOM;Flotr.addPlugin("labels",{callbacks:{"flotr:afterdraw":function(){this.labels.draw()}},draw:function(){function l(t,l,o){{var e,s=o?l.minorTicks:l.ticks,a=1===l.orientation;1===l.n}for(e={color:l.options.color||c.grid.color,angle:Flotr.toRad(l.options.labelsAngle),textBaseline:"middle"},f=0;f<s.length&&(o?l.options.showMinorLabels:l.options.showLabels);++f)i=s[f],i.label+="",i.label&&i.label.length&&(x=Math.cos(f*n+h)*r,y=Math.sin(f*n+h)*r,e.textAlign=a?Math.abs(x)<.1?"center":0>x?"right":"left":"left",Flotr.drawText(b,i.label,a?x:3,a?y:-(l.ticks[f].v/l.max)*(r-c.fontSize),e))}function o(t,l,o,e){function s(t){return t.options.showLabels&&t.used}function r(t,l,o,e){return t.plotOffset.left+(l?e:o?-c.grid.labelMargin:c.grid.labelMargin+t.plotWidth)}function a(t,l,o,e){return t.plotOffset.top+(l?c.grid.labelMargin:e)+(l&&o?t.plotHeight:0)}var n,h,p=1===l.orientation,d=1===l.n;for(n={color:l.options.color||c.grid.color,textAlign:o,textBaseline:e,angle:Flotr.toRad(l.options.labelsAngle)},n=Flotr.getBestTextAlign(n.angle,n),f=0;f<l.ticks.length&&s(l);++f)i=l.ticks[f],i.label&&i.label.length&&(h=l.d2p(i.v),0>h||h>(p?t.plotWidth:t.plotHeight)||(Flotr.drawText(b,i.label,r(t,p,d,h),a(t,p,d,h),n),p||d||(b.save(),b.strokeStyle=n.color,b.beginPath(),b.moveTo(t.plotOffset.left+t.plotWidth-8,t.plotOffset.top+l.d2p(i.v)),b.lineTo(t.plotOffset.left+t.plotWidth,t.plotOffset.top+l.d2p(i.v)),b.stroke(),b.restore())))}function e(t,l){var o,e,r=1===l.orientation,a=1===l.n,n="",h=t.plotOffset;if(r||a||(b.save(),b.strokeStyle=l.options.color||c.grid.color,b.beginPath()),l.options.showLabels&&(a?!0:l.used))for(f=0;f<l.ticks.length;++f)i=l.ticks[f],!i.label||!i.label.length||(r?h.left:h.top)+l.d2p(i.v)<0||(r?h.left:h.top)+l.d2p(i.v)>(r?t.canvasWidth:t.canvasHeight)||(e=h.top+(r?(a?1:-1)*(t.plotHeight+c.grid.labelMargin):l.d2p(i.v)-l.maxLabel.height/2),o=r?h.left+l.d2p(i.v)-s/2:0,n="",0===f?n=" first":f===l.ticks.length-1&&(n=" last"),n+=r?" flotr-grid-label-x":" flotr-grid-label-y",d+=['<div style="position:absolute; text-align:'+(r?"center":"right")+"; ","top:"+e+"px; ",(r||a?"left:":"right:")+o+"px; ","width:"+(r?s:(a?h.left:h.right)-c.grid.labelMargin)+"px; ",l.options.color?"color:"+l.options.color+"; ":" ",'" class="flotr-grid-label'+n+'">'+i.label+"</div>"].join(" "),r||a||(b.moveTo(h.left+t.plotWidth-8,h.top+l.d2p(i.v)),b.lineTo(h.left+t.plotWidth,h.top+l.d2p(i.v))))}{var i,s,r,a,n,h,p,f,d="",g=0,c=this.options,b=this.ctx,v=this.axes;({size:c.fontSize})}for(f=0;f<v.x.ticks.length;++f)v.x.ticks[f].label&&++g;s=this.plotWidth/g,c.grid.circular&&(b.save(),b.translate(this.plotOffset.left+this.plotWidth/2,this.plotOffset.top+this.plotHeight/2),r=this.plotHeight*c.radar.radiusRatio/2+c.fontSize,a=this.axes.x.ticks.length,n=2*(Math.PI/a),h=-Math.PI/2,l(this,v.x,!1),l(this,v.x,!0),l(this,v.y,!1),l(this,v.y,!0),b.restore()),!c.HtmlText&&this.textEnabled?(o(this,v.x,"center","top"),o(this,v.x2,"center","bottom"),o(this,v.y,"right","middle"),o(this,v.y2,"left","middle")):(v.x.options.showLabels||v.x2.options.showLabels||v.y.options.showLabels||v.y2.options.showLabels)&&!c.grid.circular&&(d="",e(this,v.x),e(this,v.x2),e(this,v.y),e(this,v.y2),b.stroke(),b.restore(),p=t.create("div"),t.setStyles(p,{fontSize:"smaller",color:c.grid.color}),p.className="flotr-labels",t.insert(this.el,p),t.insert(p,d))}})}();