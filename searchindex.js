Search.setIndex({docnames:["api/eeprom","api/ftdi","api/gpio","api/i2c","api/index","api/misc","api/spi","api/uart","api/usbtools","authors","defs","eeprom","features","index","installation","licenses","pinout","requirements","troubleshooting","urlscheme"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:56},filenames:["api/eeprom.rst","api/ftdi.rst","api/gpio.rst","api/i2c.rst","api/index.rst","api/misc.rst","api/spi.rst","api/uart.rst","api/usbtools.rst","authors.rst","defs.rst","eeprom.rst","features.rst","index.rst","installation.rst","licenses.rst","pinout.rst","requirements.rst","troubleshooting.rst","urlscheme.rst"],objects:{"pyftdi.eeprom":{FtdiEeprom:[0,1,1,""],FtdiEepromError:[0,4,1,""]},"pyftdi.eeprom.FtdiEeprom":{VAR_STRINGS:[0,2,1,""],close:[0,3,1,""],commit:[0,3,1,""],data:[0,3,1,""],device_version:[0,3,1,""],dump_config:[0,3,1,""],erase:[0,3,1,""],is_empty:[0,3,1,""],open:[0,3,1,""],save_config:[0,3,1,""],set_manufacturer_name:[0,3,1,""],set_product_name:[0,3,1,""],set_serial_number:[0,3,1,""],size:[0,3,1,""]},"pyftdi.ftdi":{Ftdi:[1,1,1,""],FtdiError:[1,4,1,""],FtdiFeatureError:[1,4,1,""],FtdiMpsseError:[1,4,1,""]},"pyftdi.ftdi.Ftdi":{add_custom_product:[1,3,1,""],add_custom_vendor:[1,3,1,""],bitbang_enabled:[1,3,1,""],calc_eeprom_checksum:[1,3,1,""],close:[1,3,1,""],create_from_url:[1,3,1,""],decode_modem_status:[1,3,1,""],device_version:[1,3,1,""],enable_3phase_clock:[1,3,1,""],enable_adaptive_clock:[1,3,1,""],enable_drivezero_mode:[1,3,1,""],enable_loopback_mode:[1,3,1,""],fifo_sizes:[1,3,1,""],find_all:[1,3,1,""],frequency_max:[1,3,1,""],get_cd:[1,3,1,""],get_cts:[1,3,1,""],get_device:[1,3,1,""],get_dsr:[1,3,1,""],get_error_string:[1,3,1,""],get_identifiers:[1,3,1,""],get_latency_timer:[1,3,1,""],get_ri:[1,3,1,""],has_drivezero:[1,3,1,""],has_mpsse:[1,3,1,""],has_wide_port:[1,3,1,""],ic_name:[1,3,1,""],is_H_series:[1,3,1,""],is_connected:[1,3,1,""],is_legacy:[1,3,1,""],is_mpsse:[1,3,1,""],modem_status:[1,3,1,""],mpsse_bit_delay:[1,3,1,""],open:[1,3,1,""],open_bitbang:[1,3,1,""],open_bitbang_from_device:[1,3,1,""],open_bitbang_from_url:[1,3,1,""],open_from_device:[1,3,1,""],open_from_url:[1,3,1,""],open_mpsse:[1,3,1,""],open_mpsse_from_device:[1,3,1,""],open_mpsse_from_url:[1,3,1,""],overwrite_eeprom:[1,3,1,""],poll_modem_status:[1,3,1,""],port_width:[1,3,1,""],purge_buffers:[1,3,1,""],purge_rx_buffer:[1,3,1,""],purge_tx_buffer:[1,3,1,""],read_data:[1,3,1,""],read_data_bytes:[1,3,1,""],read_data_get_chunksize:[1,3,1,""],read_data_set_chunksize:[1,3,1,""],read_eeprom:[1,3,1,""],read_pins:[1,3,1,""],set_baudrate:[1,3,1,""],set_bitmode:[1,3,1,""],set_break:[1,3,1,""],set_dtr:[1,3,1,""],set_dtr_rts:[1,3,1,""],set_dynamic_latency:[1,3,1,""],set_error_char:[1,3,1,""],set_event_char:[1,3,1,""],set_flowctrl:[1,3,1,""],set_frequency:[1,3,1,""],set_latency_timer:[1,3,1,""],set_line_property:[1,3,1,""],set_rts:[1,3,1,""],validate_mpsse:[1,3,1,""],write_data:[1,3,1,""],write_data_get_chunksize:[1,3,1,""],write_data_set_chunksize:[1,3,1,""],write_eeprom:[1,3,1,""]},"pyftdi.gpio":{GpioController:[2,1,1,""],GpioException:[2,4,1,""]},"pyftdi.gpio.GpioController":{all_pins:[2,3,1,""],close:[2,3,1,""],configure:[2,3,1,""],direction:[2,3,1,""],is_connected:[2,3,1,""],open_from_url:[2,3,1,""],pins:[2,3,1,""],read:[2,3,1,""],read_port:[2,3,1,""],set_direction:[2,3,1,""],width:[2,3,1,""],write:[2,3,1,""],write_port:[2,3,1,""]},"pyftdi.i2c":{I2cController:[3,1,1,""],I2cGpioPort:[3,1,1,""],I2cIOError:[3,4,1,""],I2cNackError:[3,4,1,""],I2cPort:[3,1,1,""],I2cTimeoutError:[3,4,1,""]},"pyftdi.i2c.I2cController":{configure:[3,3,1,""],configured:[3,3,1,""],direction:[3,3,1,""],exchange:[3,3,1,""],flush:[3,3,1,""],frequency:[3,3,1,""],frequency_max:[3,3,1,""],get_gpio:[3,3,1,""],get_port:[3,3,1,""],gpio_all_pins:[3,3,1,""],gpio_pins:[3,3,1,""],poll:[3,3,1,""],poll_cond:[3,3,1,""],read:[3,3,1,""],read_gpio:[3,3,1,""],set_gpio_direction:[3,3,1,""],set_retry_count:[3,3,1,""],terminate:[3,3,1,""],validate_address:[3,3,1,""],width:[3,3,1,""],write:[3,3,1,""],write_gpio:[3,3,1,""]},"pyftdi.i2c.I2cGpioPort":{all_pins:[3,3,1,""],direction:[3,3,1,""],pins:[3,3,1,""],read:[3,3,1,""],set_direction:[3,3,1,""],width:[3,3,1,""],write:[3,3,1,""]},"pyftdi.i2c.I2cPort":{address:[3,3,1,""],configure_register:[3,3,1,""],exchange:[3,3,1,""],flush:[3,3,1,""],frequency:[3,3,1,""],poll:[3,3,1,""],poll_cond:[3,3,1,""],read:[3,3,1,""],read_from:[3,3,1,""],shift_address:[3,3,1,""],write:[3,3,1,""],write_to:[3,3,1,""]},"pyftdi.misc":{hexdump:[5,5,1,""],hexline:[5,5,1,""],is_iterable:[5,5,1,""],pretty_size:[5,5,1,""],to_bool:[5,5,1,""],to_bps:[5,5,1,""],to_int:[5,5,1,""],xor:[5,5,1,""]},"pyftdi.spi":{SpiController:[6,1,1,""],SpiGpioPort:[6,1,1,""],SpiIOError:[6,4,1,""],SpiPort:[6,1,1,""]},"pyftdi.spi.SpiController":{active_channels:[6,3,1,""],channels:[6,3,1,""],configure:[6,3,1,""],configured:[6,3,1,""],direction:[6,3,1,""],exchange:[6,3,1,""],flush:[6,3,1,""],frequency:[6,3,1,""],frequency_max:[6,3,1,""],get_gpio:[6,3,1,""],get_port:[6,3,1,""],gpio_all_pins:[6,3,1,""],gpio_pins:[6,3,1,""],is_inverted_cpha_supported:[6,3,1,""],read_gpio:[6,3,1,""],set_gpio_direction:[6,3,1,""],terminate:[6,3,1,""],width:[6,3,1,""],write_gpio:[6,3,1,""]},"pyftdi.spi.SpiGpioPort":{all_pins:[6,3,1,""],direction:[6,3,1,""],pins:[6,3,1,""],read:[6,3,1,""],set_direction:[6,3,1,""],width:[6,3,1,""],write:[6,3,1,""]},"pyftdi.spi.SpiPort":{cs:[6,3,1,""],exchange:[6,3,1,""],flush:[6,3,1,""],frequency:[6,3,1,""],mode:[6,3,1,""],read:[6,3,1,""],set_frequency:[6,3,1,""],set_mode:[6,3,1,""],write:[6,3,1,""]},"pyftdi.usbtools":{UsbTools:[8,1,1,""],UsbToolsError:[8,4,1,""]},"pyftdi.usbtools.UsbTools":{find_all:[8,3,1,""],flush_cache:[8,3,1,""],get_device:[8,3,1,""],get_string:[8,3,1,""],parse_url:[8,3,1,""],release_device:[8,3,1,""],show_devices:[8,3,1,""]},pyftdi:{eeprom:[0,0,0,"-"],ftdi:[1,0,0,"-"],gpio:[2,0,0,"-"],i2c:[3,0,0,"-"],misc:[5,0,0,"-"],spi:[6,0,0,"-"],usbtools:[8,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","exception","Python exception"],"5":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:exception","5":"py:function"},terms:{"0b1":17,"0b2":9,"0x00":[3,6],"0x04":3,"0x06":3,"0x08":3,"0x10":6,"0x12":[3,6],"0x1234":19,"0x20":6,"0x21":3,"0x30":6,"0x34":[3,6],"0x403":19,"0x53":3,"0x56":3,"0x5678":19,"0x6001":19,"0x6010":19,"0x6011":19,"0x6014":19,"0x6015":19,"0x7f":3,"0x9f":6,"0xff":2,"10e6":6,"10mhz":6,"12e6":6,"12mbp":13,"12mhz":6,"1mbp":7,"1ms":3,"2232d":19,"2232h":[0,3,6,7,19],"230x":19,"232h":[3,6,14,19],"232r":19,"3mbaud":7,"3mbp":[12,13],"4232h":[6,19],"4432h":[3,6],"boolean":[3,5],"break":[1,8,9],"byte":[0,1,3,5,6,7,18],"case":[3,6,19],"char":[5,7],"cl\u00e9ment":9,"default":[0,1,3,5,6,7,8,13],"export":[0,3,6,18],"final":[5,18],"float":[1,3,5,6],"function":[1,11],"import":[0,3,7,14,19],"int":[0,1,2,3,5,6,8],"long":[9,15],"new":[0,1,2,6,8,11,13],"public":[13,15],"return":[0,1,2,3,5,6,8,13],"short":1,"static":[1,8],"switch":[1,7],"true":[0,1,2,3,5,6,7],"try":[11,14,18],"while":[1,3,6,11,12,13,14],AND:15,ARE:15,Added:9,BUT:15,CTS:[1,7,16],FOR:15,For:[2,11,12,15],IOs:[3,6],Its:[1,14],NOT:[15,17],Not:1,RTS:[1,9,16],SUCH:15,THE:15,TMS:16,The:[0,1,3,5,6,7,8,11,12,14,19],Then:7,There:[1,3,6,7,14,19],USE:15,Use:[1,6,11],Useful:1,Will:9,With:14,Yes:7,_a_:5,_b_:5,_from_url:19,abbrevi:5,abl:1,about:[7,8,14,17],abov:[1,5,7,13,14,15,17],acbu:16,acbus0:16,acbus1:16,acbus2:16,acbus3:16,acbus4:16,acbus5:16,acbus6:16,acbus7:16,accept:[1,3,5,6,7,19],access:[0,1,9,11,12,13,14],achiev:[1,3,5,6,7],ack:3,acknowledg:3,act:7,action:11,activ:[1,6,17],active_channel:6,actual:[0,1,3,6,7,11,14],adam:9,adapt:[1,9,12],adbu:16,adbus0:16,adbus1:16,adbus2:16,adbus3:16,adbus4:16,adbus5:16,adbus6:16,adbus7:16,adc:6,add:[1,3,6,9,14,19],add_custom_product:[1,14,19],add_custom_vendor:[1,14,19],added:[3,12],addess:19,addr:1,address:[1,2,3,6,9,12,13,19],addus:14,advanc:2,advis:15,adxl345:[3,6],after:[6,9],again:[6,11],against:[3,13],aim:13,alia:18,alias:19,all:[1,3,6,7,8,11,12,13,14,15,19],all_pin:[2,3,6],allow:[1,5,9,14],allow_int:5,along:[11,17],alreadi:[1,18],also:[1,3,6,12,13,14,18,19],alter:11,altern:[0,3,6,13,14],although:[7,13,17],alwai:[1,2,6,8,14],among:19,amount:1,ander:9,andrea:9,ani:[0,1,3,5,6,7,9,11,15,17,18,19],anoth:[18,19],anymor:[8,15],api:[8,9,11,12,14,15],appear:[8,14],append:5,appl:18,appleusbftdi:18,appli:[3,6],applic:[6,7,11],appropri:[3,6],apt:14,arbitrari:[1,19],archiv:7,argument:[1,3,5,6,7,8,9,11],aris:15,arm:1,arrai:[1,3,6,13],ascii:[5,11],ask:19,assert:[3,6],associ:3,attemp:1,attempt:[1,11,18],attr:14,augment:13,author:[13,18],automat:[1,12,14,18],avail:[1,3,6,7,11,12,14,16,19],awar:[1,7],back:[3,7,8,11,14],backend:[7,12,14,17],backward:13,bail:3,balanc:1,bandwidth:1,bang:2,bare:7,base:[1,2,12,13],basi:[1,7,17],baudrat:[1,5,7,13],baudrate_toler:1,bcbu:16,bcbus0:16,bcbus1:16,bcbus2:16,bcbus3:16,bcbus4:16,bcbus5:16,bcbus6:16,bcbus7:16,bdbus0:16,bdbus1:16,bdbus2:16,bdbus3:16,bdbus4:16,bdbus5:16,bdbus6:16,bdbus7:16,becaus:1,been:[0,1,3,6,8,12,13,14,15,17,18],befor:[1,3,6,11,19],behav:5,being:[1,12,13],below:[14,17],benureau:9,best:19,beta:12,between:[1,5,7],bia:[3,6],big:3,bigendian:3,bin:[11,12,18,19],binari:[3,5,15],binaryio:0,bit:[1,2,3,6,7,12,16,17,19],bitbang:[1,2,13,16],bitbang_en:1,bitfield:[1,2,3,6],bitmask:[1,9],bitrat:3,block:[1,6],blot:[9,15],blue:16,bool:[0,1,2,3,5,6,8],both:12,bouaziz:9,bps:7,break_:1,brew:14,brick:[1,11],bridg:[1,13],bring:13,brown:16,buffer:[1,3,5,7],bug:9,bundl:18,bus0:3,bus1:3,bus2:3,bus3:6,bus4:6,bus7:3,bus:[1,3,6,9,12,13,16,19],buse:[1,19],busi:[3,15],bypass:[1,3,8],bytearrai:[1,3,5,6,13],c232hd:[14,16],cabl:16,cach:[1,8],calc_eeprom_checksum:1,calcul:[1,9,13],call:[1,6,7,8,13,19],can:[1,3,6,7,8,9,11,12,13,18,19],candid:[5,8],cannot:[1,3,5,7,18],capabl:[1,7,13,16],care:[1,11],carrier:1,caus:[11,15,18],caution:11,chang:[0,1,3,6,11,14],channel:[6,14],charact:[1,5,7],characterist:1,check:[1,3,18],checkout:[3,6,17],checksum:1,chip:[1,6],choic:17,chunk:1,chunksiz:1,circumv:1,classmethod:[1,3,8],clear:[1,8],click:14,client:[7,13],clock:[1,3,6,7,12,13,16],clockstrech:3,clockstretch:3,clone:14,close:[0,1,2,3,6,7,12,15],closest:[1,5],cmd:14,code:[5,9,15,17,18,19],collector:1,com:[1,14,18],come:18,command:[1,3,6,7,11,14],commerci:15,commit:0,common:[5,12],commun:[1,3,6,12,14,18],companion:[11,12],compat:[1,9,13,15,19],complet:[6,14],complex:3,compli:15,compliant:[12,13],composit:14,comput:1,concil:9,condit:[3,15],configur:[0,1,2,3,6,9,11,14,16,18],configure_regist:3,conflict:18,connect:[0,1,2,3,6,7,8,11,12,14,16],consequ:6,consequenti:15,consid:[6,12],constant:[1,9],constraint:8,constructor:6,contact:18,contain:[1,6,12,17,18,19],content:[0,1,11,12],contract:15,contributor:15,control:[1,2,3,6,7,14],convers:5,convert:[5,13],cope:6,copi:[3,6,11,14],copyright:15,core:1,corrupt:19,could:13,count:[1,2,3,6,8],cpha:[6,12],cpol:[6,12],cpu:1,creat:[1,14],create_from_url:[1,19],crlf:7,cs0:[6,16],cs1:[6,16],cs2:16,cs3:16,cs4:16,cs_count:6,cs_epilog:6,cs_hold:6,cs_prolog:6,ctrl:[3,6,7],current:[0,1,3,6,7,11,13,17,18],custom:[1,7,14],cycl:[1,3,6,7],d2xx:18,dac:6,daemon:14,damag:15,darren:9,data:[0,1,3,5,6,7,11,15,18],dave:9,davidwc:9,dcd:16,ddhsp:14,deal:[8,14],debug:[1,3,6,7,11,18],debunk:9,decim:[5,19],decod:[1,11],decode_modem_statu:1,decoded:1,decreas:1,dedic:[2,6,7],default_vendor:[8,19],defin:[0,1,2,3,6,7,19],definit:[1,5,9],delai:[1,6,9],demonstr:12,depend:[1,3,6,7,13,17,19],deprec:[17,19],deriv:[6,15],desactivet:6,descript:[1,9,11],descriptor:[1,8],design:[1,6],desir:1,detail:[7,19],detect:[0,1,7],determin:6,devdesc:8,develop:[12,15,18],deviat:1,devic:[0,1,2,3,6,7,8,9,11,13,14],device_vers:[0,1],differ:[1,8,11],difficult:7,difficulti:14,direct:[1,2,3,6,7,15,16],directli:[1,3,6],directori:[7,9,12,18,19],disabl:[1,6],discard:3,disclaim:15,disconnect:8,discov:12,discrimin:[1,8],dispatch:12,distinguish:11,distribut:[14,15],divid:13,dividor:1,divisor:9,dlharmon:9,document:[1,6,7,9,13,15],doe:[1,6,7,11,15,16,17,18],done:1,doubl:[1,9],drift:1,drive:[1,2,3,6],driven:1,driver:[4,9,12,13,14,18],drop:13,dry:11,dry_run:[0,1],dsr:[1,16],dtr:[1,16],dual:[13,14],due:[3,6],dump:[0,5,11],dump_config:0,duplex:[6,9,12],durat:[6,7],dure:11,duti:[6,7],dyld_library_path:18,dylib:18,dynam:[1,18],each:[1,2,3,6,8,11,14,19],earli:18,easi:6,easiest:14,eblot:14,ebouaziz:9,echo:7,editor:9,eeprom:[1,4,9,13,14,19],eeprom_s:1,effect:[11,14],either:[1,8,16,19],electr:2,email:18,emit:[3,18],emmanuel:[9,15],empti:[1,3,6],emul:12,enabl:[1,3,5,6,7,11,12],enable_3phase_clock:1,enable_adaptive_clock:1,enable_drivezero_mod:1,enable_loopback_mod:1,encod:3,end:[1,8,14],endian:3,endlesscoil:9,endors:15,endpoint:1,enforc:3,engin:[1,3,6,9],enough:19,ensur:18,enumer:[1,8,18,19],environm:17,epilog:6,eras:[0,11,19],error:[0,1,2,3,6,8],error_onli:1,errorch:1,essenti:11,etc:14,etherfi:9,even:[1,11,15],event:[1,3,15],eventch:1,everi:1,exact:[1,5],exampl:[0,1,2,3,6,14,17,18,19],except:7,exchang:[3,6],exclus:2,execut:[1,6,11],exemplari:15,exhibit:7,exist:[1,2,13,18,19],exit:[7,11],expand:3,expect:[1,3,6],experi:18,experiment:[11,12],expos:16,express:15,extend:6,extens:[7,12,18],extern:[1,7],extra:6,extract:1,extrem:11,fabien:9,fail:[3,5,6,8],fallback:5,fals:[0,1,2,3,5,6,8],faq:1,fatal:18,fdti:19,featur:[1,2,3,6,7,13,16],feedback:1,feuer:9,fifo:[1,3,6],fifo_s:1,file:[0,11,14,15,18],fill:18,find:[1,8,19],find_al:[1,8],first:[1,3,5,6,7,11,16],fit:[0,15,19],fix:9,flag:[1,11],flash:[6,12],floor:5,flow:[1,7],flowcontrol:1,flowctrl:1,flush:[3,6,8],flush_cach:8,fluter:7,fmt:3,follow:[1,3,7,13,15,17,19],forc:[1,3,6],fork:12,form:15,format:[3,5],former:14,free:[9,13,15],freeli:15,freq:6,frequenc:[1,3,6,9],frequency_max:[1,3,6],fresh:[1,3,6,14],from:[0,1,3,6,7,8,9,11,12,15,18,19],ft0fmf6v:19,ft123abc:11,ft1pwz0q:14,ft2232:14,ft2232d:13,ft2232h:[1,7,8,9,11,12,13,16],ft230x:13,ft232:13,ft232h:[9,12,13,14,16,19],ft232r:[9,13],ft232x:9,ft4232:14,ft4232h:[1,8,9,12,13,16],ft_prog:11,ftconf:12,ftdi:[0,2,3,4,6,7,8,9,11,12,13,14,15,18,19],ftdi_devic:[0,3,6],ftdi_loglevel:[3,6],ftdi_recoveri:11,ftdichip:1,ftdieeprom:0,ftdieepromerror:0,ftdierror:1,ftdifeatureerror:1,ftdimpsseerror:1,ftdu_url:19,ftxxx:[1,7],full:[1,5,6,7,12],fulli:12,fullmod:7,further:[3,6],garnier:9,gener:[5,6,8,9,15],get:[1,3,6,11,14],get_cd:1,get_ct:1,get_devic:[1,8],get_dsr:1,get_error_str:1,get_gpio:[3,6],get_identifi:1,get_latency_tim:1,get_port:[3,6],get_ri:1,get_str:8,git:14,github:[3,6,14,18],give:1,gnu:15,goe:11,good:[7,15],gpi:6,gpio0:16,gpio10:16,gpio11:16,gpio12:16,gpio13:16,gpio14:16,gpio15:16,gpio1:16,gpio2:16,gpio3:16,gpio4:16,gpio5:16,gpio6:16,gpio7:[3,16],gpio8:16,gpio9:16,gpio:[1,3,4,6,9,12,13],gpio_all_pin:[3,6],gpio_pin:[3,6],gpiocontrol:2,gpioexcept:2,gpo:6,grant:18,greater:[0,7],green:16,grei:16,group:14,guid:18,had:15,half:[1,6,12],handl:3,hannesweisbach:9,hardwar:[1,6,7,14],has:[0,1,3,6,7,12,14,15,16,17],has_drivezero:1,has_mpss:1,has_wide_port:1,have:[0,1,8,11,13,14,17,18,19],hello:[6,7],help:[7,11,12,18,19],helper:[4,8,19],here:[1,7,14,19],hexadecim:[5,19],hexdump:[0,5,11],hexlin:5,high:[1,2,3,6,7,18],higher:1,highli:8,hint:[9,13],histor:[9,15],hold:6,holder:15,host:[1,3,8,9,11,14,17,19],how:[1,5,12],howev:[3,12,15,17,19],http:[1,14],hub:14,humm:9,hwflow:7,i2c:[1,4,9,16],i2ccontrol:3,i2cgpio:3,i2cgpioport:3,i2cioerror:3,i2cnackerror:3,i2cport:3,i2cscan:12,i2ctimeouterror:3,ic_nam:1,ident:5,identifi:[1,8,14,19],idproduct:14,ids:8,idvendor:14,ifac:1,ignor:[1,3,14],immedi:1,implement:[6,7,9,11,12,13,15],impli:15,imposs:7,improv:[9,13],incident:15,includ:[1,3,6,12,13,15],increas:[1,3,6,7,11],index:[1,5,6,8,19],indic:[1,7,18],indirect:15,individu:14,inform:[1,8,14],ini:[0,11],initi:[1,3,6,8,9,12,15],input:[1,2,3,5,6,16],instal:[7,9,13,17,18],instanc:[0,1,3,5,6,7,8,12,19],instanci:[3,6,8,9],instant:6,instanti:[0,3,6],instead:[1,13,19],integ:[1,3,5,6,19],integr:5,intend:1,interfac:[0,1,2,3,6,7,8,14,16,19],intern:1,interrupt:[1,15],introduc:13,invalid:[1,3,9,18],invert:[1,6],invok:3,is_connect:[1,2],is_empti:0,is_h_seri:1,is_inverted_cpha_support:6,is_iter:5,is_legaci:1,is_mpss:1,issu:[9,17,18],item:14,iter:[3,5,6],its:[1,3,15],itself:17,jedec:6,jedec_id:6,jitter:6,joker:8,jtag:[1,2,9,13,16],kbp:7,keep:[1,3,6,13],kernel:[9,17,18],kextunload:18,kib:5,kilo:5,kind:[1,3,8,18],kludg:6,known:[6,7],kwarg:[2,3,6],lack:6,languag:13,larg:1,larger:1,last:[1,8,9],latenc:[1,3,6],latenti:1,latest:17,latter:18,layer:[9,12,15],ld_library_path:18,lead:8,least:[1,6],leav:3,legaci:[1,2,13],legrand:9,length:[0,1,11],leonard:9,less:6,lesser:15,level:[1,2,3,6,18],lgpl:15,liabil:15,liabl:15,lib:18,libftdi:15,librari:[6,17,18],libusb:[14,17,18],licens:[11,13],like:6,lim_k:5,lim_m:5,limit:[1,3,5,11,12,15],line:[1,5,6,11,13,16],link:1,linux:[17,18],list:[1,7,8,14,15,19],lmax:1,lmin:1,load:[1,14,18],loader:18,local:7,localecho:7,locat:8,log:[0,1,3,6,14],logger:18,logic:[1,2,3,5,7],longer:[6,17,18],loopback:[1,7],lose:1,loss:[1,15,18],low:[1,2,3,6,7],lowest:[3,6],lsb:[3,6],maco:[17,18],made:[1,7],mai:[0,1,2,3,5,6,8,11,13,14,15,16,17,18,19],main:15,maintain:[1,13,17],make:[9,14],manag:[0,1,3,6,9,12,13],mandatori:[0,11],mani:14,manner:6,manufactur:[0,11,13,19],map:[3,6,8,11],marcq:9,mask:3,master:[3,6,13],match:[1,2,8,14,19],materi:15,maverick:18,max:3,maximum:[1,3,6],mbp:[7,12],mccoi:9,mean:[3,6],meaningless:1,measur:7,medium:3,mega:5,meierphil:9,menu:14,merchant:15,mess:9,messag:[7,11],met:15,method:[3,6,8,13],mhz:13,mib:5,michael:9,might:1,mileag:17,millisecond:1,mini:11,minim:12,minimodul:11,minimum:1,misc:[0,4],miscellan:4,miscellean:5,miso:[6,16],miss:[14,18],mode:[1,2,3,7,9,11,12,14,16],model:11,modem:1,modem_statu:1,modern:13,modif:[11,15],modifi:11,modul:[3,6,7,11,12,13,17],mojav:18,more:[1,3,5,6,7,8,11,13],moreov:7,mosi:[6,16],most:[3,11,13],mostli:[1,11],move:18,mpsee:1,mpsse:[1,2,3,6,12,16],mpsse_bit_delai:1,multi:[5,13],multipl:[1,14],multipli:5,must:[1,14,15],mutual:2,mx25l1606e:6,myproduct:19,myvendor:19,nack:3,name:[0,1,3,6,7,8,11,12,14,15,19],nativ:[14,17,18],need:[1,2,3,6,11,14,18,19],neglig:15,neither:[3,15],neotion:15,never:[3,6,18],nevertheless:13,newgrp:14,next:[5,17],niku:9,nocach:[1,8],node:6,non:1,none:[0,1,2,3,6,8],nopeppermint:9,nor:[3,15],normal:[1,7],note:[1,3,6,7,11,14,16,17,18,19],notic:15,now:[2,11,12,13],number:[0,1,6,11,14,19],numer:19,obj:5,object:[5,19],obtain:[1,3,6,8],occasion:[1,7],occur:3,octavian:9,odd:1,offer:12,offici:[6,14,17,19],offset:[3,6],old:19,onc:[1,3,6,11,12,14],one:[1,3,6,8,13,17,19],ones:[3,6],onli:[1,2,3,6,11,12,13,16,17,19],open:[0,1,2,7,8,9,12,14,15],open_:13,open_bitbang:[1,19],open_bitbang_from_devic:[1,19],open_bitbang_from_url:[1,19],open_from_devic:[1,19],open_from_url:[1,2,14,19],open_mpss:[1,19],open_mpsse_from_devic:[1,19],open_mpsse_from_url:[1,19],openusb:17,oper:[1,5,7],oppos:[1,7],optimis:9,option:[0,1,3,6,7,8,11,13,14,19],orang:16,order:[1,8,16,19],origin:[11,15],other:[1,6,13,15,17,19],otherwis:[3,15],out:[1,3,6,8,14,15,18],output:[0,1,2,3,6,7,8,11,16],over:[1,3,6,7,12],overrun:[1,7],overwrite_eeprom:1,own:1,packag:9,packet:[1,7],pair:[1,8,19],param:[1,3],paramet:[0,1,2,3,5,6,8,13,19],parent:14,pariti:1,pars:[1,5,8],parse_url:8,part:1,particular:15,particularli:19,path:18,payload:[1,18],pdf:1,pdict:8,peacefulli:18,peer:3,per:[6,9,13],perform:[3,6,11,13],permiss:[5,15],permit:15,perspect:15,pete:9,phase:[1,6],physic:0,pid:[1,8,14],pid_guidelin:1,pidnam:1,pin:[1,2,3,6,7,13,16],pinout:[3,6,13],pip3:14,place:11,platform:17,pleas:[11,14,17,18],plug:[8,11,14],plugdev:14,plural:5,point:1,polar:6,poll:[1,3,9],poll_cond:3,poll_modem_statu:1,port:[0,1,2,3,6,7,8,9,11,12,13,14,16,19],port_width:1,posit:[3,6,11],possibl:[5,6,12,13,15,19],potenti:[1,7],preced:[3,6],precis:6,preempt:18,prefer:[1,8,14,19],prefix:[7,19],prelimiari:13,present:[1,7,14],pretti:1,pretty_s:5,prettyfi:5,prevent:3,previou:[1,3,6,13,17],previous:[6,8],print:[0,7],prior:15,probabl:14,problem:[1,7],process:[1,14],procur:15,produc:7,product:[0,1,8,11,13,15],product_id:19,profit:15,project:[12,15],prolog:6,promot:15,proper:7,properli:[3,6],properti:[0,1,2,3,6],proprietari:1,protect:11,protocol:[1,3,12,13],protocol_ftdi:7,proven:7,provid:[1,3,6,8,13,15,16,17],pull:16,purdila:9,pure:[12,13],purge_buff:1,purge_rx_buff:1,purge_tx_buff:1,purpl:16,purpos:[1,15],pwd:7,pyftdi:[0,1,2,3,5,6,7,8,11,12,14,15,17,18,19],pyi2cflash:3,pyseri:[1,7,9,12,13,14,17],pyspiflash:[6,12],pyterm:7,python3:[0,3,6,7,14],python:[7,12,13,17],pythonpath:[0,3,6,7],pyusb:[1,8,9,14,17,18,19],quad:13,quot:7,rais:[1,3,5],random:[1,8],rang:3,ratio:7,raus:1,raw:[0,18],rclk:16,reach:[1,3,6],read:[1,2,3,6,7,8,9,11,12,13,18],read_buf:6,read_data:1,read_data_byt:1,read_data_get_chunks:1,read_data_set_chunks:1,read_eeprom:1,read_from:3,read_gpio:[3,6],read_pin:1,read_port:2,readabl:5,readi:1,readlen:[3,6],readlin:13,real:7,reason:15,rebuilt:1,receiv:[1,3,6,7],recogn:19,recommand:8,recommend:[3,6,11,19],reconfigur:[2,3,6],recov:11,redistribut:15,refactor:9,refer:[14,18],referenc:1,regaddr:3,regist:[3,18],regular:[1,3,6,7,17],reject:1,rel:3,relax:3,releas:[0,3,6,8,13,17],release_devic:8,reli:[6,14,17,18],reliabl:[1,6,7,8],reload:[14,18],remain:6,rememb:14,remot:[3,6],remov:[3,9],repeat:3,replac:[5,7,14],report:[0,1,2,3,6,7,11,14,17,19],repositori:[3,6,14],repres:[2,3,6,14],represent:5,reproduc:15,requ:7,request:[1,3,6,11],requir:[1,3,7,11,13,14,16],reserv:[2,3,6,13,15],reset:1,resistor:16,respons:1,restor:11,result:7,resum:6,retain:15,retri:3,retriev:[1,3,6,8,19],review:[6,9],rfda2125:6,richei:9,right:15,ring:1,risk:1,rs232:[1,7,14],rsck:16,rtfm:1,rts:1,rule:14,run:[3,6,7,11,14,18],runtim:12,rxd:[1,16],saint:9,same:[1,2,7,8,12,15,18],sampl:[3,6],satisfi:3,satisifi:3,save:[0,11],save_config:0,scheme:[1,8,9,13],schwamb:9,sck:[3,16],scl:3,sclk:[6,16],script:[11,12,18,19],sda:[3,16],sda_i:3,sda_o:3,seamless:17,sebastian:9,second:[1,5,7,18],secondari:16,section:[17,18],see:[1,2,3,6,7,11,12,14,17,18],seen:[1,7],select:[0,1,3,6,7,8,9,11,12,14,16,19],selector:[1,2,8,19],self:[3,6],send:[1,3,6,7],sent:1,sep:5,separ:5,sequenc:[1,3,6,8],seri:[3,6,7,12,13,16,17],serial:[0,1,2,8,11,12,13,14,16,19],serial_for_url:7,serial_numb:11,serialext:[4,12],sernum:1,servic:15,session:[7,19],set:[1,2,3,6,7,11],set_baudr:1,set_bit:1,set_bitmod:1,set_break:1,set_direct:[2,3,6],set_dtr:1,set_dtr_rt:1,set_dynamic_lat:1,set_error_char:1,set_event_char:1,set_flowctrl:1,set_frequ:[1,6],set_gpio_direct:[3,6],set_latency_tim:1,set_line_properti:1,set_manufacturer_nam:0,set_mod:6,set_product_nam:0,set_retry_count:3,set_rt:1,set_serial_numb:0,setup:[3,6,14],sever:[1,3,8,11,12,13,18],sgoadhous:9,shall:15,share:[2,15],sheet:6,shell:14,shift:1,shift_address:3,ship:18,shortcut:1,shorter:1,shoud:[1,7],should:[0,1,2,3,6,7,8,12,14,16,17,18,19],show:[0,7,8,11],show_devic:8,side:1,sierra:18,signal:[1,6],silent:7,similar:15,simpl:[7,11,14,19],simplifi:13,simulaten:9,simultan:[12,13],sinc:8,singl:[1,13,14,19],site:11,size:[0,1,3,5,6],slace:6,slave:[1,2,3,6,13],sleep:3,slot:6,slow:[1,3],smaller:5,soft:9,softwar:[1,12,15,17],solut:[1,8,12],some:[0,1,3,6,8,11,13,14,18,19],someth:11,sourc:[12,15,17],space:[1,13,14],special:[1,3,6,15,19],specif:[1,3,6,11,14,15,19],specifi:[0,1,2,3,5,6,8,11,13,19],speed:[3,9,11],spi:[1,2,4,9,13,16],spi_mod:6,spicontrol:[6,13],spigpio:6,spigpioport:6,spiioerror:6,spiport:6,split:1,stabil:7,stabl:[7,13,18],stack:3,stage:12,standard:[1,17],start:[1,3,6,7,8,13,14,18,19],state:[1,6],statu:[1,2],stdout:[0,8],stefan:9,still:[12,13,18],stop:[1,3,6,7],stopbit:1,store:14,str:[0,1,2,3,5,6,8],stream:[0,1,8],stretch:[3,12,16],strict:15,string:[0,1,3,5,6,8,11,19],strip:1,strname:8,struct:3,structur:9,subsequ:[7,11],subset:1,subshel:14,substitut:15,subsystem:14,success:[14,17],successfulli:12,sudo:[14,18],suffer:7,suffix:19,support:[1,2,3,6,8,9,13,14,16,17],sure:[3,6,14,18],synchron:[1,6,12],syntax:[9,19],system:[18,19],tabl:7,take:[3,5,6,18],tavip:9,tca9555:3,tck:16,tdi:16,tdo:16,technicalnot:1,tell:[1,3,5,19],term:11,termin:[1,3,6,12],test:[1,2,5,7,9,11,13,14,17],textio:0,than:[1,3,6,7,19],thei:[1,16],them:11,theori:[7,15],therefor:[3,13,18,19],thi:[1,2,3,5,6,7,8,11,12,13,14,15,18,19],those:19,threshold:1,through:[1,12,19],throughput:[1,6],tim:9,time:[1,3,6,7,8],timeout:[3,9],timer:1,timestamp:6,tini:[18,19],tn_100_usb_vid:1,to_bool:5,to_bp:5,to_int:5,togeth:16,too:1,tool:4,top:3,tort:15,total:1,tracer:1,transact:[3,6],transfer:[3,9],transmit:[1,7],transpar:12,tri:[13,19],trigger:[1,14,18],tristat:9,troubleshoot:13,tupl:[1,8],tuppl:1,turbo:6,tweak:[1,3],twice:7,two:[1,3,16,19],txd:[1,16],type:[0,1,2,3,5,6,7,8,13],typic:14,uart:[1,4,9,13,16],udev:[14,18],udevadm:14,uncheck:14,under:[12,15],undesir:11,unexpect:11,uninstal:18,union:[0,1,3,5,6],uniqu:[1,14,19],unit:[1,5,9],unload:18,unmask:[3,6],unplug:[8,11,14],unspecifi:1,updat:[0,1,2,9,11,13],upgrad:13,uphi:18,upper:[7,11],uppercas:1,url:[0,1,2,3,6,7,8,9,11,13],urlstr:8,usabl:7,usag:[1,3,9,11],usb:[0,1,3,4,6,7,9,13,14],usb_dev:8,usbdevicedescriptor:[1,8],usbtool:4,usbtoolserror:8,use:[1,2,3,5,6,7,8,11,12,14,15,18,19],used:[1,2,3,6,7,8,12,13,15,16,19],useful:[1,3,6,18,19],useless:9,user:[8,13,14,17,18],uses:[17,18],using:[6,11,17,18,19],usual:18,util:14,valid:[0,1,8,11,17],validate_address:3,validate_mpss:1,valu:[1,2,3,5,6,11,13,19],valueerror:[1,5],var_str:0,vari:[17,19],variabl:[0,11],vcom:18,vdict:8,vendor:[1,8],vendor_id:19,verbos:[7,11],veri:[1,3,7,11],verifi:18,version:[0,1,9,13,17,18],vestom:9,viannei:9,vid:[1,8,14],vidnam:1,virtual:18,vps:[1,8],wai:[11,14,15,18,19],wait:3,want:[6,14,18,19],warn:6,warranti:15,watch:3,web:11,well:7,what:[0,1,3,7],when:[1,3,5,6,8,11,13,16],whenev:18,where:[1,2,3,6,13,14,18,19],whether:[0,1,2,3,5,6,7,15],which:[1,2,3,6,12,13,14,17,19],white:16,whole:[0,1,11],wich:[3,6],wide:[1,3,6],width:[1,2,3,6],win32:14,window:[9,11,17],winusb:14,wire:[3,6],wise:1,with_output:[3,6],within:[1,7],without:[1,3,11,13,15,19],word:[1,6],work:[1,6,11,17],workaround:[1,6,12],world:[6,7],wrapper:1,write:[1,2,3,6,7,9,11,12],write_buf:6,write_data:1,write_data_get_chunks:1,write_data_set_chunks:1,write_eeprom:1,write_gpio:[3,6],write_port:2,write_to:3,written:[0,1,3,11,15],wrong:11,wrongli:11,www:1,x00:3,x01:[3,6],x02:6,x03:6,xd0:3,xd7:3,xor:5,year:12,yellow:16,yet:[1,7,12],ymmv:6,you:[1,2,3,6,11,14,15,17,18,19],your:[1,11,13,14,17,19],zero:[1,3,6]},titles:["<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">eeprom</span></code> - EEPROM API","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">ftdi</span></code> - FTDI driver","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">gpio</span></code> - GPIO API","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">i2c</span></code> - I<sup>2</sup>C API","API documentation","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">misc</span></code> - Miscellaneous helpers","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">spi</span></code> - SPI API","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">serialext</span></code> - UART API","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">usbtools</span></code> - USB tools","Authors","&lt;no title&gt;","EEPROM management","Features","PyFtdi","Installation","Licenses","FTDI device pinout","Requirements","Troubleshooting","URL Scheme"],titleterms:{"break":13,"class":[0,1,2,3,6,8],"function":5,Bus:18,IDs:19,The:18,access:18,api:[0,2,3,4,6,7,13],author:9,avail:18,backend:18,base:19,bsd:15,bug:18,capitan:18,caveat:[3,6],chang:13,check:14,claus:15,common:18,connect:19,contributor:9,custom:19,debian:14,deni:18,depend:14,detail:13,develop:[9,17],devic:[12,16,18,19],document:4,driver:1,eeprom:[0,11,12],error:18,exampl:7,except:[0,1,2,3,6,8],featur:[11,12],from:14,ftconf:11,ftdi:[1,16],goal:13,gpio:2,has:18,helper:5,homebrew:14,i2c:[3,12],initialis:18,instal:14,insuffici:18,jtag:12,langid:18,legaci:19,licens:15,limit:[6,7],linux:14,log:18,maco:14,main:9,major:13,manag:11,master:12,messag:18,method:19,mini:7,misc:5,miscellan:5,mode:6,open:[18,19],overview:13,permiss:18,pid:19,pinout:16,pip:14,port:18,post:14,potenti:13,prerequisit:14,primari:13,product:19,pyftdi:13,python:14,quickstart:[0,2,3,6,7],report:18,requir:17,saniti:14,scheme:19,serial:[7,18],serialexcept:18,serialext:7,serialutil:18,slow:18,sourc:14,spi:[6,12],statu:12,support:[11,12,19],termin:7,test:[0,3,6],tool:[8,19],troubleshoot:18,uart:[7,12],ubuntu:14,unabl:18,url:19,usag:7,usb:[8,18,19],usbtool:8,vendor:19,vid:19,violat:18,window:14,zadig:14}})