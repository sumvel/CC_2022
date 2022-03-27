var r1_end = 15;
var r2_end = 15;//30;
var r3_end = 15;//70;
var r3_exists = false;
var match_result = new Array();
match_result[0] = "KKR";
match_result[1] = "MI";
var semi_result = new Array();

var teams_list = new Array("Chennai Super Kings", "Delhi Capitals", "Gujarat Titans", "Kolkata Knight Riders", "Lucknow Super Gaints", "Mumbai Indians", "Punjab Kings", "Royal Challengers Banglore", "Rajasthan Royals", "Sun Risers Hyderabad");
var teams_list_st = new Array("CSK", "DC", "GT", "KKR", "LSG", "MI", "PBKS", "RCB", "RR", "SRH");
var teams = teams_list_st.length;
/*		0 - Mumbai Indians
		1 - Chennai Super Kings
		2 - Delhi Capitals
		3 - Punjab Kings
		4 - Rajasthan Royals
		5 - Kolkata Knight Riders
		6 - Royal Challengers Banglore
		7 - Sun Risers Hyderabad
		8 - Gujarat Titans
		9 - Lucknow Super Gaints
		, "On Going","Not Started","Not Selected","To be decided"
		10 - Ongoing
		11 - Not started
		12 - Abandoned*/
//xz = teams_list_st.indexOf("RR");
//alert(xz);
var steam = new Array("Well Production Services", "Well Construction", "Electrical", "Reservoir Performance", "Rest of STSI");
var steam_st = new Array("WPRS", "WEC", "Elec", "RP", "RoS");
var steam_cnt = steam.length;
var player_list = new Array("AArab6", "ABaliyan", "AContractor2", "ADadmal", "ADas17", "AHalaiah", "AJain58", "AJog", "AKasar", "AKonpratiwar", "AKurukundu", "AMulunjkar", "APotadar", "ASahasrabudhe", "ASahoo2", "ASalunkhe2", "ASatpute2", "AShaikh41", "AShete4", "ASonawane", "ASonawane2", "AThakur9", "AYadav26", "BGawarkar", "BJadav", "BJoshirao", "BPremarajan", "BTailor", "CBharadwaj", "CSakore", "CSharma7", "DDeval", "DDutta2", "DKatre", "DKrishna", "DKumar24", "DPrasad3", "DThimmayyachar", "DVadakkedath", "DYadav15", "FOdakkal", "GJoshi3", "GLolge", "GSingh58", "GZoman", "HLakshminarayan", "HRathod2", "JAgrahari", "JDarekar", "JJ", "JSonavane", "KBiju", "KD2", "KDeshmukh4", "KMahajan2", "KPachpande", "KPawar2", "KShinde5", "KTrivedi2", "KVyshnave", "KWaghela", "LChoudhary", "LSharma7", "MBenal", "MBhadane", "MGurikar", "MJha", "MRamalakshmi", "MSharma6", "MSoni2", "MTelange", "NGaikwad5", "NLahkar", "NPandya2", "NPise", "OMahajan", "OUnnikrishnan", "PBirje", "PChaudhary2", "PDash", "PDhanvade", "PGowda", "PKalita", "PKulkarni3", "PPotadar", "PRay2", "PSatange", "PSharma31", "PSingh66", "RAvancha", "RBhamare", "RDeshmukh2", "RDutta3", "RHariharan", "RKadam", "RKumar54", "RMailvaganan", "RMalwale", "RPatil", "RPereira14", "RPhadke", "RRaj9", "RShylaja", "RSingh38", "RSingh92", "RSrivastava2", "RSundaramurthi", "SAvasthi", "SAvishek", "SBanerjee8", "SBhosale7", "SChauhan2", "SDhavaleshwar", "SGaikwad11", "SGujarathi2", "SGurjar3", "SKaler", "SKampalli", "SKarunamoorthy", "SManurkar", "SMohanty8", "SMourya", "SPatel21", "SPatil17", "SPatil33", "SPatne", "SPatole2", "SPrakash5", "SSharma153", "SSherkar", "SShinde3", "SSumati", "SThantry", "STiwari14", "SUsman", "SVaidya3", "SVasireddy", "SVelvaluri", "SVenkannavar", "SVerma10", "TShinde6", "VChavan", "VJayaraman2", "VKokate", "VKumar59", "VMarfatia", "VMulik", "VPatel11", "VPawar", "VRamanan", "VTonage", "YJain2");
var players = player_list.length;
var player_steam_list = new Array("Elec", "RoS", "WPRS", "Elec", "WPRS", "Elec", "WEC", "WPRS", "RoS", "RP", "RP", "WEC", "RP", "RP", "RoS", "RP", "RoS", "WPRS", "WEC", "RoS", "WEC", "Elec", "WEC", "WPRS", "RoS", "WEC", "Elec", "Elec", "RoS", "WEC", "RP", "WPRS", "Elec", "Elec", "RoS", "Elec", "RP", "RoS", "RP", "WEC", "WPRS", "RP", "WEC", "RP", "Elec", "Elec", "Elec", "RoS", "Elec", "WEC", "RP", "WPRS", "WPRS", "WEC", "RP", "WPRS", "WPRS", "RoS", "Elec", "WEC", "RP", "WPRS", "WEC", "RP", "WEC", "RoS", "RoS", "Elec", "Elec", "WPRS", "WEC", "RP", "RP", "Elec", "WEC", "Elec", "Elec", "RP", "WPRS", "Elec", "RP", "Elec", "WEC", "WEC", "WPRS", "WEC", "WPRS", "WPRS", "RoS", "RoS", "WPRS", "RP", "RoS", "WPRS", "WEC", "WPRS", "RP", "WEC", "RoS", "RoS", "RoS", "WPRS", "Elec", "Elec", "RoS", "RoS", "WEC", "WEC", "RoS", "RoS", "RP", "Elec", "Elec", "WEC", "WPRS", "RP", "RP", "WPRS", "RP", "Elec", "WPRS", "WPRS", "RP", "WEC", "Elec", "WPRS", "RoS", "WPRS", "RoS", "WPRS", "WEC", "WPRS", "Elec", "RoS", "WPRS", "WPRS", "RP", "WEC", "WEC", "WEC", "WEC", "WPRS", "RP", "WPRS", "Elec", "WPRS", "WEC", "RoS", "RoS", "WEC", "Elec", "WPRS");
var player_list_ranks = new Array();
var list_prad1 = new Array();
var list_prad2 = new Array();
var picks = new Array();
var player_score = new Array();
var player_ranks = new Array();
var player_score_ranks = new Array();
var player_ranks_ranks = new Array();
var score_prad1 = new Array();
var score_prad2 = new Array();
for(i=0;i<players;i++)
{
	picks[i] = new Object();
	player_list_ranks[i] = player_list[i];
	list_prad1[i] =  player_list[i];
	list_prad2[i] =  player_list[i];
	player_score[i] = 0;
}
var dat = new Array("26-03", "27-03", "27-03", "28-03", "29-03", "30-03", "31-03", "01-04", "02-04", "02-04", "03-04", "04-04", "05-04", "06-04", "07-04");
var matches = dat.length;
//alert("matches = " + matches);

//alert("players = " + players);
var team1 = new Array("CSK", "DC", "PBKS", "GT", "SRH", "RCB", "LSG", "PBKS", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG");
var team2 = new Array("KKR", "MI", "RCB", "LSG", "RR", "KKR", "CSK", "KKR", "RR", "DC", "PBKS", "LSG", "RCB", "MI", "DC");
var team1_bets = new Array();
var team2_bets = new Array();
picks[0].pick = new Array("CSK", "MI", "PBKS", "GT", "RR", "KKR", "LSG", "PBKS", "MI", "DC", "CSK", "SRH", "RR", "KKR", "DC"); //AArab6_0
picks[1].pick = new Array("CSK", "DC", "RCB", "LSG", "SRH", "RCB", "CSK", "PBKS", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); //ABaliyan_1
picks[2].pick = new Array("CSK", "DC", "PBKS", "GT", "SRH", "RCB", "LSG", "PBKS", "MI", "GT", "CSK", "SRH", "RR", "MI", "DC"); //AContractor2_2
picks[3].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "KKR", "CSK", "PBKS", "MI", "DC", "CSK", "SRH", "RR", "MI", "LSG"); //ADadmal_3
picks[4].pick = new Array("CSK", "DC", "PBKS", "GT", "SRH", "RCB", "LSG", "PBKS", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); //ADas17_4
picks[5].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "RCB", "LSG", "KKR", "RR", "DC", "CSK", "SRH", "RCB", "MI", "DC"); //AHalaiah_5
picks[6].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "RCB", "CSK", "KKR", "MI", "GT", "CSK", "LSG", "RCB", "MI", "DC"); //AJain58_6
picks[7].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "RCB", "CSK", "PBKS", "MI", "DC", "CSK", "SRH", "RR", "MI", "DC"); //AJog_7
picks[8].pick = new Array("CSK", "MI", "PBKS", "LSG", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); //AKasar_8
picks[9].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "KKR", "LSG", "KKR", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); //AKonpratiwar_9
picks[10].pick = new Array("CSK", "DC", "RCB", "LSG", "RR", "KKR", "LSG", "PBKS", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); //AKurukundu_10
picks[11].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "RCB", "CSK", "PBKS", "MI", "GT", "CSK", "LSG", "RR", "MI", "DC"); //AMulunjkar_11
picks[12].pick = new Array("CSK", "DC", "PBKS", "GT", "SRH", "RCB", "LSG", "PBKS", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); //APotadar_12
picks[13].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "KKR", "CSK", "PBKS", "MI", "DC", "CSK", "LSG", "RR", "MI", "LSG"); //ASahasrabudhe_13
picks[14].pick = new Array("CSK", "MI", "RCB", "LSG", "SRH", "KKR", "CSK", "KKR", "RR", "DC", "PBKS", "SRH", "RR", "KKR", "LSG"); //ASahoo2_14
picks[15].pick = new Array("CSK", "DC", "PBKS", "GT", "SRH", "RCB", "LSG", "KKR", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); //ASalunkhe2_15
picks[16].pick = new Array("KKR", "MI", "RCB", "LSG", "RR", "RCB", "CSK", "KKR", "RR", "DC", "CSK", "SRH", "RCB", "MI", "DC"); //ASatpute2_16
picks[17].pick = new Array("CSK", "MI", "PBKS", "GT", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RR", "KKR", "LSG"); //AShaikh41_17
picks[18].pick = new Array("KKR", "MI", "PBKS", "LSG", "SRH", "KKR", "LSG", "KKR", "RR", "GT", "PBKS", "SRH", "RR", "MI", "DC"); //AShete4_18
picks[19].pick = new Array("CSK", "DC", "RCB", "LSG", "RR", "RCB", "LSG", "KKR", "MI", "DC", "PBKS", "LSG", "RR", "MI", "DC"); //ASonawane_19
picks[20].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); //ASonawane2_20
picks[21].pick = new Array("KKR", "DC", "PBKS", "GT", "SRH", "RCB", "CSK", "KKR", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); //AThakur9_21
picks[22].pick = new Array("CSK", "DC", "RCB", "LSG", "SRH", "RCB", "CSK", "PBKS", "RR", "DC", "CSK", "SRH", "RCB", "MI", "DC"); //AYadav26_22
picks[23].pick = new Array("CSK", "MI", "RCB", "LSG", "SRH", "KKR", "CSK", "PBKS", "MI", "DC", "CSK", "LSG", "RR", "MI", "DC"); //BGawarkar_23
picks[24].pick = new Array("CSK", "MI", "RCB", "LSG", "RR", "RCB", "LSG", "PBKS", "MI", "GT", "CSK", "LSG", "RR", "MI", "LSG"); //BJadav_24
picks[25].pick = new Array("CSK", "MI", "PBKS", "GT", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); //BJoshirao_25
picks[26].pick = new Array("CSK", "DC", "RCB", "LSG", "RR", "RCB", "LSG", "KKR", "RR", "DC", "CSK", "SRH", "RR", "MI", "DC"); //BPremarajan_26
picks[27].pick = new Array("KKR", "MI", "PBKS", "GT", "SRH", "KKR", "CSK", "PBKS", "MI", "DC", "PBKS", "SRH", "RCB", "KKR", "DC"); //BTailor_27
picks[28].pick = new Array("KKR", "MI", "RCB", "LSG", "RR", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RR", "MI", "DC"); //CBharadwaj_28
picks[29].pick = new Array("KKR", "MI", "RCB", "GT", "SRH", "KKR", "LSG", "PBKS", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); //CSakore_29
picks[30].pick = new Array("KKR", "MI", "RCB", "GT", "SRH", "KKR", "CSK", "KKR", "MI", "GT", "CSK", "LSG", "RR", "MI", "DC"); //CSharma7_30
picks[31].pick = new Array("CSK", "DC", "PBKS", "LSG", "RR", "RCB", "LSG", "PBKS", "RR", "DC", "PBKS", "LSG", "RR", "MI", "LSG"); //DDeval_31
picks[32].pick = new Array("CSK", "MI", "RCB", "LSG", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "LSG"); //DDutta2_32
picks[33].pick = new Array("KKR", "MI", "RCB", "LSG", "RR", "KKR", "LSG", "KKR", "RR", "GT", "PBKS", "LSG", "RR", "MI", "LSG"); //DKatre_33
picks[34].pick = new Array("CSK", "DC", "PBKS", "GT", "SRH", "RCB", "LSG", "KKR", "MI", "DC", "CSK", "SRH", "RR", "MI", "DC"); //DKrishna_34
picks[35].pick = new Array("CSK", "DC", "RCB", "LSG", "RR", "KKR", "CSK", "PBKS", "MI", "DC", "CSK", "LSG", "RR", "MI", "LSG"); //DKumar24_35
picks[36].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "RCB", "CSK", "KKR", "RR", "DC", "CSK", "SRH", "RCB", "MI", "DC"); //DPrasad3_36
picks[37].pick = new Array("KKR", "MI", "RCB", "LSG", "RR", "RCB", "LSG", "PBKS", "MI", "DC", "PBKS", "LSG", "RCB", "MI", "LSG"); //DThimmayyachar_37
picks[38].pick = new Array("CSK", "MI", "PBKS", "GT", "RR", "KKR", "CSK", "KKR", "MI", "GT", "CSK", "LSG", "RCB", "MI", "DC"); //DVadakkedath_38
picks[39].pick = new Array("KKR", "MI", "RCB", "GT", "SRH", "RCB", "CSK", "PBKS", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); //DYadav15_39
picks[40].pick = new Array("CSK", "DC", "RCB", "LSG", "RR", "KKR", "CSK", "PBKS", "RR", "DC", "CSK", "SRH", "RR", "KKR", "DC"); //FOdakkal_40
picks[41].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "RCB", "LSG", "PBKS", "MI", "DC", "CSK", "SRH", "RR", "MI", "DC"); //GJoshi3_41
picks[42].pick = new Array("KKR", "MI", "RCB", "GT", "SRH", "KKR", "LSG", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); //GLolge_42
picks[43].pick = new Array("CSK", "DC", "PBKS", "LSG", "RR", "RCB", "LSG", "KKR", "MI", "DC", "PBKS", "LSG", "RCB", "KKR", "DC"); //GSingh58_43
picks[44].pick = new Array("CSK", "MI", "PBKS", "GT", "SRH", "KKR", "CSK", "PBKS", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); //GZoman_44
picks[45].pick = new Array("CSK", "MI", "RCB", "LSG", "SRH", "RCB", "CSK", "PBKS", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); //HLakshminarayan_45
picks[46].pick = new Array("KKR", "MI", "RCB", "LSG", "RR", "KKR", "CSK", "PBKS", "MI", "DC", "PBKS", "SRH", "RCB", "MI", "DC"); //HRathod2_46
picks[47].pick = new Array("KKR", "DC", "RCB", "GT", "RR", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); //JAgrahari_47
picks[48].pick = new Array("KKR", "DC", "RCB", "GT", "RR", "RCB", "LSG", "KKR", "MI", "DC", "CSK", "LSG", "RR", "MI", "DC"); //JDarekar_48
picks[49].pick = new Array("CSK", "DC", "RCB", "GT", "RR", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RR", "MI", "DC"); //JJ_49
picks[50].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "KKR", "CSK", "PBKS", "MI", "DC", "CSK", "LSG", "RCB", "KKR", "LSG"); //JSonavane_50
picks[51].pick = new Array("KKR", "MI", "RCB", "GT", "SRH", "KKR", "LSG", "PBKS", "MI", "GT", "CSK", "SRH", "RR", "KKR", "DC"); //KBiju_51
picks[52].pick = new Array("CSK", "MI", "PBKS", "GT", "SRH", "KKR", "CSK", "PBKS", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); //KD2_52
picks[53].pick = new Array("CSK", "MI", "RCB", "LSG", "SRH", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); //KDeshmukh4_53
picks[54].pick = new Array("CSK", "DC", "RCB", "LSG", "SRH", "KKR", "LSG", "KKR", "RR", "DC", "CSK", "LSG", "RR", "MI", "LSG"); //KMahajan2_54
picks[55].pick = new Array("CSK", "MI", "PBKS", "GT", "RR", "RCB", "LSG", "KKR", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); //KPachpande_55
picks[56].pick = new Array("CSK", "MI", "PBKS", "LSG", "RR", "RCB", "CSK", "PBKS", "MI", "DC", "PBKS", "SRH", "RR", "MI", "DC"); //KPawar2_56
picks[57].pick = new Array("CSK", "MI", "RCB", "LSG", "RR", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); //KShinde5_57
picks[58].pick = new Array("KKR", "MI", "RCB", "GT", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); //KTrivedi2_58
picks[59].pick = new Array("CSK", "MI", "PBKS", "GT", "RR", "KKR", "CSK", "PBKS", "MI", "DC", "CSK", "SRH", "RCB", "KKR", "DC"); //KVyshnave_59
picks[60].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); //KWaghela_60
picks[61].pick = new Array("KKR", "DC", "RCB", "LSG", "RR", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RR", "MI", "DC"); //LChoudhary_61
picks[62].pick = new Array("KKR", "DC", "RCB", "GT", "RR", "RCB", "CSK", "PBKS", "RR", "GT", "PBKS", "SRH", "RCB", "KKR", "DC"); //LSharma7_62
picks[63].pick = new Array("KKR", "MI", "PBKS", "LSG", "SRH", "KKR", "LSG", "PBKS", "RR", "DC", "PBKS", "LSG", "RCB", "KKR", "DC"); //MBenal_63
picks[64].pick = new Array("CSK", "MI", "PBKS", "GT", "SRH", "RCB", "CSK", "KKR", "MI", "GT", "CSK", "SRH", "RR", "MI", "LSG"); //MBhadane_64
picks[65].pick = new Array("CSK", "DC", "RCB", "LSG", "SRH", "RCB", "LSG", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "LSG"); //MGurikar_65
picks[66].pick = new Array("CSK", "DC", "RCB", "GT", "RR", "KKR", "CSK", "KKR", "MI", "GT", "CSK", "LSG", "RCB", "KKR", "DC"); //MJha_66
picks[67].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "RCB", "CSK", "KKR", "MI", "GT", "CSK", "SRH", "RCB", "MI", "LSG"); //MRamalakshmi_67
picks[68].pick = new Array("CSK", "MI", "PBKS", "GT", "SRH", "RCB", "LSG", "KKR", "MI", "DC", "CSK", "SRH", "RR", "KKR", "DC"); //MSharma6_68
picks[69].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); //MSoni2_69
picks[70].pick = new Array("CSK", "DC", "RCB", "LSG", "SRH", "RCB", "LSG", "KKR", "MI", "GT", "CSK", "LSG", "RR", "MI", "DC"); //MTelange_70
picks[71].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "KKR", "CSK", "PBKS", "MI", "DC", "CSK", "SRH", "RR", "MI", "DC"); //NGaikwad5_71
picks[72].pick = new Array("KKR", "MI", "PBKS", "GT", "RR", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "KKR", "DC"); //NLahkar_72
picks[73].pick = new Array("CSK", "MI", "RCB", "LSG", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); //NPandya2_73
picks[74].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); //NPise_74
picks[75].pick = new Array("CSK", "DC", "PBKS", "LSG", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); //OMahajan_75
picks[76].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RR", "MI", "DC"); //OUnnikrishnan_76
picks[77].pick = new Array("KKR", "MI", "RCB", "GT", "SRH", "RCB", "LSG", "PBKS", "MI", "DC", "CSK", "LSG", "RCB", "KKR", "DC"); //PBirje_77
picks[78].pick = new Array("CSK", "DC", "RCB", "LSG", "RR", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); //PChaudhary2_78
picks[79].pick = new Array("CSK", "MI", "RCB", "LSG", "RR", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RR", "MI", "DC"); //PDash_79
picks[80].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "KKR", "CSK", "KKR", "MI", "GT", "CSK", "LSG", "RCB", "MI", "DC"); //PDhanvade_80
picks[81].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "RCB", "CSK", "PBKS", "MI", "GT", "CSK", "LSG", "RCB", "MI", "LSG"); //PGowda_81
picks[82].pick = new Array("CSK", "MI", "RCB", "LSG", "RR", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RR", "MI", "LSG"); //PKalita_82
picks[83].pick = new Array("KKR", "DC", "PBKS", "GT", "SRH", "RCB", "LSG", "KKR", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); //PKulkarni3_83
picks[84].pick = new Array("CSK", "DC", "RCB", "GT", "SRH", "RCB", "CSK", "PBKS", "MI", "DC", "CSK", "LSG", "RCB", "MI", "LSG"); //PPotadar_84
picks[85].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "KKR", "CSK", "KKR", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); //PRay2_85
picks[86].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "RCB", "CSK", "PBKS", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); //PSatange_86
picks[87].pick = new Array("KKR", "DC", "RCB", "LSG", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RR", "KKR", "DC"); //PSharma31_87
picks[88].pick = new Array("CSK", "MI", "PBKS", "LSG", "SRH", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RR", "MI", "DC"); //PSingh66_88
picks[89].pick = new Array("CSK", "DC", "PBKS", "GT", "SRH", "RCB", "LSG", "PBKS", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); //RAvancha_89
picks[90].pick = new Array("CSK", "MI", "PBKS", "LSG", "RR", "RCB", "CSK", "KKR", "RR", "GT", "PBKS", "SRH", "RCB", "KKR", "DC"); //RBhamare_90
picks[91].pick = new Array("KKR", "MI", "RCB", "GT", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RR", "MI", "DC"); //RDeshmukh2_91
picks[92].pick = new Array("CSK", "DC", "PBKS", "LSG", "SRH", "RCB", "LSG", "PBKS", "RR", "GT", "CSK", "SRH", "RR", "MI", "LSG"); //RDutta3_92
picks[93].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "KKR", "CSK", "PBKS", "MI", "DC", "PBKS", "SRH", "RCB", "MI", "DC"); //RHariharan_93
picks[94].pick = new Array("KKR", "MI", "RCB", "LSG", "RR", "KKR", "CSK", "KKR", "RR", "DC", "CSK", "LSG", "RCB", "MI", "LSG"); //RKadam_94
picks[95].pick = new Array("CSK", "DC", "RCB", "LSG", "SRH", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RR", "KKR", "DC"); //RKumar54_95
picks[96].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "KKR", "CSK", "KKR", "MI", "GT", "CSK", "SRH", "RR", "MI", "DC"); //RMailvaganan_96
picks[97].pick = new Array("CSK", "DC", "RCB", "LSG", "RR", "KKR", "LSG", "KKR", "RR", "DC", "CSK", "LSG", "RCB", "MI", "LSG"); //RMalwale_97
picks[98].pick = new Array("KKR", "DC", "RCB", "GT", "SRH", "KKR", "LSG", "KKR", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); //RPatil_98
picks[99].pick = new Array("CSK", "MI", "PBKS", "LSG", "SRH", "KKR", "LSG", "KKR", "RR", "DC", "PBKS", "LSG", "RR", "MI", "DC"); //RPereira14_99
picks[100].pick = new Array("KKR", "DC", "PBKS", "LSG", "SRH", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); //RPhadke_100
picks[101].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "KKR", "LSG", "PBKS", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); //RRaj9_101
picks[102].pick = new Array("CSK", "MI", "PBKS", "GT", "SRH", "RCB", "LSG", "PBKS", "RR", "GT", "PBKS", "SRH", "RR", "KKR", "LSG"); //RShylaja_102
picks[103].pick = new Array("CSK", "DC", "RCB", "LSG", "RR", "RCB", "LSG", "PBKS", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); //RSingh38_103
picks[104].pick = new Array("CSK", "MI", "PBKS", "GT", "RR", "KKR", "CSK", "PBKS", "MI", "DC", "CSK", "LSG", "RR", "MI", "DC"); //RSingh92_104
picks[105].pick = new Array("CSK", "DC", "PBKS", "GT", "SRH", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); //RSrivastava2_105
picks[106].pick = new Array("CSK", "DC", "PBKS", "GT", "SRH", "RCB", "LSG", "PBKS", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); //RSundaramurthi_106
picks[107].pick = new Array("CSK", "MI", "RCB", "LSG", "RR", "RCB", "LSG", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "LSG"); //SAvasthi_107
picks[108].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); //SAvishek_108
picks[109].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); //SBanerjee8_109
picks[110].pick = new Array("CSK", "MI", "RCB", "LSG", "RR", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RR", "MI", "DC"); //SBhosale7_110
picks[111].pick = new Array("KKR", "DC", "RCB", "LSG", "RR", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); //SChauhan2_111
picks[112].pick = new Array("CSK", "DC", "RCB", "LSG", "RR", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); //SDhavaleshwar_112
picks[113].pick = new Array("CSK", "MI", "RCB", "LSG", "SRH", "KKR", "LSG", "KKR", "MI", "GT", "PBKS", "LSG", "RR", "KKR", "DC"); //SGaikwad11_113
picks[114].pick = new Array("CSK", "DC", "RCB", "GT", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "PBKS", "LSG", "RR", "KKR", "DC"); //SGujarathi2_114
picks[115].pick = new Array("CSK", "MI", "RCB", "LSG", "RR", "KKR", "CSK", "PBKS", "MI", "GT", "CSK", "SRH", "RCB", "MI", "DC"); //SGurjar3_115
picks[116].pick = new Array("CSK", "DC", "PBKS", "LSG", "RR", "KKR", "CSK", "KKR", "RR", "DC", "PBKS", "SRH", "RR", "KKR", "DC"); //SKaler_116
picks[117].pick = new Array("KKR", "MI", "RCB", "LSG", "SRH", "KKR", "LSG", "KKR", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); //SKampalli_117
picks[118].pick = new Array("CSK", "MI", "RCB", "LSG", "RR", "RCB", "CSK", "KKR", "RR", "DC", "CSK", "SRH", "RCB", "KKR", "DC"); //SKarunamoorthy_118
picks[119].pick = new Array("CSK", "DC", "RCB", "GT", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RR", "KKR", "LSG"); //SManurkar_119
picks[120].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); //SMohanty8_120
picks[121].pick = new Array("CSK", "DC", "RCB", "GT", "RR", "KKR", "CSK", "PBKS", "MI", "DC", "CSK", "SRH", "RCB", "MI", "LSG"); //SMourya_121
picks[122].pick = new Array("KKR", "MI", "RCB", "LSG", "RR", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); //SPatel21_122
picks[123].pick = new Array("KKR", "DC", "RCB", "LSG", "RR", "RCB", "CSK", "PBKS", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); //SPatil17_123
picks[124].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "RCB", "LSG", "PBKS", "MI", "DC", "CSK", "SRH", "RR", "MI", "LSG"); //SPatil33_124
picks[125].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "KKR", "CSK", "PBKS", "MI", "DC", "PBKS", "SRH", "RR", "MI", "LSG"); //SPatne_125
picks[126].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "RCB", "CSK", "KKR", "MI", "DC", "PBKS", "SRH", "RCB", "MI", "DC"); //SPatole2_126
picks[127].pick = new Array("CSK", "DC", "RCB", "GT", "RR", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); //SPrakash5_127
picks[128].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "RCB", "CSK", "KKR", "MI", "GT", "CSK", "LSG", "RCB", "MI", "DC"); //SSharma153_128
picks[129].pick = new Array("CSK", "DC", "RCB", "GT", "SRH", "KKR", "LSG", "PBKS", "MI", "GT", "PBKS", "LSG", "RR", "KKR", "DC"); //SSherkar_129
picks[130].pick = new Array("KKR", "MI", "RCB", "GT", "RR", "RCB", "LSG", "PBKS", "MI", "DC", "CSK", "SRH", "RR", "MI", "DC"); //SShinde3_130
picks[131].pick = new Array("KKR", "DC", "RCB", "LSG", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); //SSumati_131
picks[132].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "KKR", "LSG", "KKR", "MI", "GT", "CSK", "SRH", "RR", "KKR", "DC"); //SThantry_132
picks[133].pick = new Array("CSK", "DC", "RCB", "GT", "RR", "KKR", "CSK", "KKR", "MI", "DC", "PBKS", "LSG", "RR", "KKR", "LSG"); //STiwari14_133
picks[134].pick = new Array("CSK", "DC", "PBKS", "GT", "SRH", "RCB", "LSG", "PBKS", "MI", "GT", "CSK", "SRH", "RR", "KKR", "LSG"); //SUsman_134
picks[135].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "KKR", "CSK", "PBKS", "MI", "DC", "CSK", "LSG", "RCB", "KKR", "DC"); //SVaidya3_135
picks[136].pick = new Array("KKR", "DC", "PBKS", "GT", "SRH", "RCB", "CSK", "PBKS", "MI", "DC", "CSK", "SRH", "RCB", "MI", "DC"); //SVasireddy_136
picks[137].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "RCB", "LSG", "PBKS", "MI", "GT", "CSK", "SRH", "RR", "MI", "LSG"); //SVelvaluri_137
picks[138].pick = new Array("CSK", "MI", "RCB", "LSG", "SRH", "RCB", "CSK", "KKR", "MI", "GT", "CSK", "SRH", "RCB", "KKR", "DC"); //SVenkannavar_138
picks[139].pick = new Array("KKR", "DC", "RCB", "LSG", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RR", "MI", "DC"); //SVerma10_139
picks[140].pick = new Array("CSK", "MI", "RCB", "LSG", "RR", "RCB", "LSG", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "KKR", "LSG"); //TShinde6_140
picks[141].pick = new Array("KKR", "DC", "PBKS", "GT", "RR", "KKR", "LSG", "KKR", "MI", "DC", "PBKS", "SRH", "RR", "MI", "DC"); //VChavan_141
picks[142].pick = new Array("CSK", "DC", "PBKS", "LSG", "RR", "KKR", "LSG", "KKR", "RR", "DC", "CSK", "LSG", "RR", "MI", "LSG"); //VJayaraman2_142
picks[143].pick = new Array("KKR", "MI", "RCB", "GT", "SRH", "RCB", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RR", "MI", "DC"); //VKokate_143
picks[144].pick = new Array("KKR", "DC", "RCB", "LSG", "SRH", "RCB", "CSK", "PBKS", "MI", "GT", "PBKS", "SRH", "RR", "MI", "DC"); //VKumar59_144
picks[145].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "RCB", "CSK", "PBKS", "RR", "GT", "CSK", "LSG", "RR", "MI", "LSG"); //VMarfatia_145
picks[146].pick = new Array("CSK", "MI", "RCB", "GT", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB", "MI", "LSG"); //VMulik_146
picks[147].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "KKR", "CSK", "PBKS", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); //VPatel11_147
picks[148].pick = new Array("KKR", "MI", "RCB", "GT", "SRH", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); //VPawar_148
picks[149].pick = new Array("CSK", "MI", "RCB", "GT", "RR", "RCB", "CSK", "PBKS", "MI", "GT", "CSK", "SRH", "RR", "MI", "LSG"); //VRamanan_149
picks[150].pick = new Array("CSK", "DC", "PBKS", "LSG", "RR", "KKR", "LSG", "KKR", "RR", "DC", "CSK", "LSG", "RCB", "KKR", "DC"); //VTonage_150
picks[151].pick = new Array("CSK", "DC", "RCB", "LSG", "RR", "KKR", "LSG", "KKR", "MI", "DC", "CSK", "LSG", "RCB", "MI", "DC"); //YJain2_151

var past_score = new Array();
var past_rank = new Array();
for(m=0;m<matches;m++)
{
	past_score[m] = new Object();
	past_rank[m] = new Object();
}
for(m=0;m<matches;m++)
{
	past_score[m].val = new Array();
	past_rank[m].val = new Array();
	for(n=0;n<players;n++)
	{
		past_score[m].val[n] = 0;
		past_rank[m].val[n] = 0;
	}
}
for(i=0;i<matches;i++)
{
	//alert(i);
	team1_bets[i] = 0;
	team2_bets[i] = 0;
	for(j=0;j<players;j++)
	{
		if(picks[j].pick[i]==team1[i])
			team1_bets[i]++;
		else if (picks[j].pick[i]==team2[i])
			team2_bets[i]++;
	}
}
