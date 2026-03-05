export default {
  template: `
    
        <div :class="{
                
                'p-4 border rounded-lg': true,
                'bg-gray-100 border-gray-200 text-black':theme = 'light',
                'bg-gray-700 border-gray-600 text-white':theme = 'dark',
            
            }">

            <slot/>

            <h2 v-if="$slots.heading" class="font-bold mb-2">
            
            <slot name="heading"/>

            </h2>

            

            <footer v-if="$slots.footer" class="border-gray-600 border-t mt-4 pt-4">
                <slot name="footer"></slot>
            </footer>

        </div>
    
    `,

  props: {
    theme: { type: String, default: "light" },
  },
};
