import {BSElement} from "./bselement"

export class BSCol extends BSElement{
  constructor() {
    super()
    this.toolboxInfo.groupId = 'groupGrid'
    this.toolboxInfo.elementId = 'column'
    this.toolboxInfo.elementName = "Column"
    this.className = 'BSCol'
    this.widthDropMargin = 15;
    this.acceptedChildren=['BSRow','BSContainer', 'HTMLDiv']

    //this.$meta.baseClass = ['col'] 
    this.$meta.width = {
      xs:'col',
      sm:'',
      md:'',
      lg:'',
      xl:'',
    }

    this.$meta.offset = {
      xs:'',
      sm:'',
      md:'',
      lg:'',
      xl:'',
    }

    this.$meta.marginAuto = {
      xs:'',
      sm:'',
      md:'',
      lg:'',
      xl:'',
    }


    this.$schema.groups = {
      'columnOptions':{
        label:'Column Options'
      }
    }

    this.$schema.fields={
      width:{
        widget:'OptionRowGroup',
        group:'columnOptions',
        xs:{
          label:'Width',
          isFirst:true,
          widget:'OpSelect',
          columns:2,
          list:{
            'col-1':'1',
            'col-2':'2',
            'col-3':'3',
            'col-4':'4',
            'col-5':'5',
            'col-6':'6',
            'col-7':'7',
            'col-8':'8',
            'col-9':'9',
            'col-10':'10',
            'col-11':'11',
            'col-12':'12',
            'col-auto':'Auto',
            'col':'Col',
          },
        },
        //---------------------
        sm:{
          label:'SM',
          widget:'OpSelect',
          columns:2,
          list:{
            'col-sm-1':'1',
            'col-sm-2':'2',
            'col-sm-3':'3',
            'col-sm-4':'4',
            'col-sm-5':'5',
            'col-sm-6':'6',
            'col-sm-7':'7',
            'col-sm-8':'8',
            'col-sm-9':'9',
            'col-sm-10':'10',
            'col-sm-11':'11',
            'col-sm-12':'12',
            'col-sm-auto':'Auto',
            'col-sm':'Col',
          },
        },
        //---------------------
        md:{
          label:'MD',
          widget:'OpSelect',
          columns:2,
          list:{
            'col-md-1':'1',
            'col-md-2':'2',
            'col-md-3':'3',
            'col-md-4':'4',
            'col-md-5':'5',
            'col-md-6':'6',
            'col-md-7':'7',
            'col-md-8':'8',
            'col-md-9':'9',
            'col-md-10':'10',
            'col-md-11':'11',
            'col-md-12':'12',
            'col-md-auto':'Auto',
            'col-md':'Col',
          },
        },
        //---------------------
        lg:{
          label:'LG',
          widget:'OpSelect',
          columns:2,
          list:{
            'col-lg-1':'1',
            'col-lg-2':'2',
            'col-lg-3':'3',
            'col-lg-4':'4',
            'col-lg-5':'5',
            'col-lg-6':'6',
            'col-lg-7':'7',
            'col-lg-8':'8',
            'col-lg-9':'9',
            'col-lg-10':'10',
            'col-lg-11':'11',
            'col-lg-12':'12',
            'col-lg-auto':'Auto',
            'col-lg':'Col',
          },
        },
        //---------------------
        xl:{
          label:'XL',
          widget:'OpSelect',
          columns:2,
          list:{
            'col-xl-1':'1',
            'col-xl-2':'2',
            'col-xl-3':'3',
            'col-xl-4':'4',
            'col-xl-5':'5',
            'col-xl-6':'6',
            'col-xl-7':'7',
            'col-xl-8':'8',
            'col-xl-9':'9',
            'col-xl-10':'10',
            'col-xl-11':'11',
            'col-xl-12':'12',
            'col-xl-auto':'Auto',
            'col-xl':'Col',
          },
        },
        //---------------------
      },//--width
      offset:{
        widget:'OptionRowGroup',
        group:'columnOptions',
        xs:{
          label:'Offset',
          isFirst:true,
          widget:'OpSelect',
          columns:2,
          list:{
            'offset-1':'1',
            'offset-2':'2',
            'offset-3':'3',
            'offset-4':'4',
            'offset-5':'5',
            'offset-6':'6',
            'offset-7':'7',
            'offset-8':'8',
            'offset-9':'9',
            'offset-10':'10',
            'offset-11':'11',
          },
        },
        //---------------------
        sm:{
          label:'SM',
          widget:'OpSelect',
          columns:2,
          list:{
            'offset-sm-1':'1',
            'offset-sm-2':'2',
            'offset-sm-3':'3',
            'offset-sm-4':'4',
            'offset-sm-5':'5',
            'offset-sm-6':'6',
            'offset-sm-7':'7',
            'offset-sm-8':'8',
            'offset-sm-9':'9',
            'offset-sm-10':'10',
            'offset-sm-11':'11',
          },
        },
        //---------------------
        md:{
          label:'MD',
          widget:'OpSelect',
          columns:2,
          list:{
            'offset-md-1':'1',
            'offset-md-2':'2',
            'offset-md-3':'3',
            'offset-md-4':'4',
            'offset-md-5':'5',
            'offset-md-6':'6',
            'offset-md-7':'7',
            'offset-md-8':'8',
            'offset-md-9':'9',
            'offset-md-10':'10',
            'offset-md-11':'11',
          },
        },
        //---------------------
        lg:{
          label:'LG',
          widget:'OpSelect',
          columns:2,
          list:{
            'offset-lg-1':'1',
            'offset-lg-2':'2',
            'offset-lg-3':'3',
            'offset-lg-4':'4',
            'offset-lg-5':'5',
            'offset-lg-6':'6',
            'offset-lg-7':'7',
            'offset-lg-8':'8',
            'offset-lg-9':'9',
            'offset-lg-10':'10',
            'offset-lg-11':'11',
          },
        },
        //---------------------
        xl:{
          label:'XL',
          widget:'OpSelect',
          columns:2,
          list:{
            'offset-xl-1':'1',
            'offset-xl-2':'2',
            'offset-xl-3':'3',
            'offset-xl-4':'4',
            'offset-xl-5':'5',
            'offset-xl-6':'6',
            'offset-xl-7':'7',
            'offset-xl-8':'8',
            'offset-xl-9':'9',
            'offset-xl-10':'10',
            'offset-xl-11':'11',
          },
        },
        //---------------------
      },//--offset

      marginAuto:{
        widget:'OptionRowGroup',
        group:'columnOptions',
        xs:{
          label:'Margin Auto',
          isFirst:true,
          widget:'OpSelect',
          list:{
            'm-auto':'All',
            'mx-auto':'Horizontal',
            'my-auto':'Vertical',
            'ml-auto':'Left',
            'mr-auto':'Right',
            'mt-auto':'Top',
            'mb-auto':'Bottom',
          },
        },
        //---------------------
        sm:{
          label:'SM',
          widget:'OpSelect',
          list:{
            'm-sm-auto':'All',
            'mx-sm-auto':'Horizontal',
            'my-sm-auto':'Vertical',
            'ml-sm-auto':'Left',
            'mr-sm-auto':'Right',
            'mt-sm-auto':'Top',
            'mb-sm-auto':'Bottom',
          },
        },
        //---------------------
        md:{
          label:'MD',
          widget:'OpSelect',
          list:{
            'm-md-auto':'All',
            'mx-md-auto':'Horizontal',
            'my-md-auto':'Vertical',
            'ml-md-auto':'Left',
            'mr-md-auto':'Right',
            'mt-md-auto':'Top',
            'mb-md-auto':'Bottom',
          },
        },
        //---------------------
        lg:{
          label:'LG',
          widget:'OpSelect',
          list:{
            'm-lg-auto':'All',
            'mx-lg-auto':'Horizontal',
            'my-lg-auto':'Vertical',
            'ml-lg-auto':'Left',
            'mr-lg-auto':'Right',
            'mt-lg-auto':'Top',
            'mb-lg-auto':'Bottom',
          },
        },
        //---------------------
        xl:{
          label:'XL',
          widget:'OpSelect',
          list:{
            'm-xl-auto':'All',
            'mx-xl-auto':'Horizontal',
            'my-xl-auto':'Vertical',
            'ml-xl-auto':'Left',
            'mr-xl-auto':'Right',
            'mt-xl-auto':'Top',
            'mb-xl-auto':'Bottom',
          },
        },
        //---------------------
      },//--marginAuto
    } 

  }

  make(){
    return new BSCol
  }

  clone(){
    let copy = super.clone()
    copy.$meta.width.xs = this.$meta.width.xs
    copy.$meta.width.sm = this.$meta.width.sm
    copy.$meta.width.md = this.$meta.width.md
    copy.$meta.width.lg = this.$meta.width.lg
    copy.$meta.width.xl = this.$meta.width.xl

    copy.$meta.offset.xs = this.$meta.offset.xs
    copy.$meta.offset.sm = this.$meta.offset.sm
    copy.$meta.offset.md = this.$meta.offset.md
    copy.$meta.offset.lg = this.$meta.offset.lg
    copy.$meta.offset.xl = this.$meta.offset.xl

    copy.$meta.marginAuto.xs = this.$meta.marginAuto.xs
    copy.$meta.marginAuto.sm = this.$meta.marginAuto.sm
    copy.$meta.marginAuto.md = this.$meta.marginAuto.md
    copy.$meta.marginAuto.lg = this.$meta.marginAuto.lg
    copy.$meta.marginAuto.xl = this.$meta.marginAuto.xl
    return copy
  }

  toViewModel(){
    let model = super.toViewModel()
    model.label.text = "Column"
    model.classList.add(this.$meta.width.xs)
    model.classList.add(this.$meta.width.sm)
    model.classList.add(this.$meta.width.md)
    model.classList.add(this.$meta.width.lg)
    model.classList.add(this.$meta.width.xl)

    model.classList.add(this.$meta.offset.xs)
    model.classList.add(this.$meta.offset.sm)
    model.classList.add(this.$meta.offset.md)
    model.classList.add(this.$meta.offset.lg)
    model.classList.add(this.$meta.offset.xl)

    model.classList.add(this.$meta.marginAuto.xs)
    model.classList.add(this.$meta.marginAuto.sm)
    model.classList.add(this.$meta.marginAuto.md)
    model.classList.add(this.$meta.marginAuto.lg)
    model.classList.add(this.$meta.marginAuto.xl)
    //model.classList.push.apply(model.classList, this.$meta.baseClass)
    //model.attributes.contentEditable = false
    return model
  }
}
