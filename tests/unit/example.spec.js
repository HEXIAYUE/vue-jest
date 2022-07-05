import { shallowMount, mount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue 判断组件是否挂载", () => {
	it("test shallowMount", () => {
		const wrapper = shallowMount(HelloWorld);
		// 判断组件是否挂载
		expect(wrapper.exists()).toBe(true);

		// 访问vm实例
		console.log(wrapper.vm);
	});
	it("test mount", () => {
		const wrapper = mount(HelloWorld);
		// 判断组件是否挂载
		expect(wrapper.exists()).toBe(true);
	});
});

describe("HelloWorld.vue 查找第一个span标签", () => {
	it("test attribute and class", () => {
		const wrapper = shallowMount(HelloWorld);
		// 查找第一个span标签
		const dom = wrapper.find("span");
		expect(dom.classes()).toContain("item");
		expect(dom.attributes().id).toBeFalsy();
	});
});

describe("HelloWorld.vue 测试click原生事件", () => {
	it("test trigger click", () => {
		const wrapper = shallowMount(HelloWorld);
		const dom = wrapper.find("#testClick");
		expect(wrapper.vm.btnText).toBe(1);
		dom.trigger("click");
		expect(wrapper.vm.btnText).toBe(2);
		// 测试dom是否更新
		expect(dom.text()).toContain(2);
	});
});

describe("HelloWorld.vue 测试click原生事件 延迟更新", () => {
	it("test trigger click", async () => {
		const wrapper = shallowMount(HelloWorld);
		const dom = wrapper.find("#testClick");
		expect(wrapper.vm.btnText).toBe(1);
		dom.trigger("click");
		expect(wrapper.vm.btnText).toBe(2);
		// 测试dom是否更新
		await wrapper.vm.$nextTick();
		expect(dom.text()).toContain(2);
	});
});

describe("HelloWorld.vue 测试组件的传值", () => {
	it("test props", () => {
		const wrapper = shallowMount(HelloWorld, {
			propsData: {
				name: "keng",
				age: "100",
			},
		});
		expect(wrapper.props().name).toBe("keng");
		expect(wrapper.props("age")).toBe("100");
	});
	it("test emit", () => {
		const wrapper = shallowMount(HelloWorld);
		const ageDom = wrapper.find("#age");
		ageDom.trigger("click");
		console.log(wrapper.emitted());
		expect(wrapper.emitted("change-age")[0]).toEqual([1]);
	});
});


describe("HelloWorld.vue 测试组件状态的改变", () => {
    it("test setData", async () => {
        const wrapper = shallowMount(HelloWorld);
        await wrapper.setData({ btnText :2});
        const dom = wrapper.find("#testClick");
        expect(dom.text()).toContain(2);
        expect(wrapper.vm.$data.btnText).toBe(2);
    });
    it("test setProps",  () => {
        const wrapper = shallowMount(HelloWorld);
        wrapper.setData({
            name: "keng",
            age: "100",
        });
        expect(wrapper.props().name).toBe("keng");
        expect(wrapper.props("age")).toBe("100");
    });
});

