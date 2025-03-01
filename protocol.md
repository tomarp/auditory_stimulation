# Title: "Prefrontal Laterality Modulation Through Targeted Auditory Beat Stimulation During Multimodal Cognitive Tasks under Photometric Conditions"  

**Abstract**  
This study investigates how auditory beat stimulation modulates prefrontal hemispheric asymmetry and autonomic nervous system activity during cognitively demanding tasks under two different photometric conditions. Participants (N=30) will perform verbal-logical (left hemisphere dominant) and visual-spatial (right hemisphere dominant) tasks under two auditory conditions: 10Hz binaural beats (440±10Hz) and 40Hz binaural beats (440±40Hz), each paired in two groups based on photometric condition (i.e. Red with 10Hz & 40Hz auditory condiitons; Blue with 10Hz & 40Hz auditory conditions). Red light therapy has been shown to enhance cognitive function by improving mitochondrial activity, increasing ATP production, and enhancing regional cerebral blood flow, which may benefit tasks requiring attention and memory[a][b][c]. Additionally, red light has been linked to improved executive function and memory in patients with traumatic brain injuries[b][d]. Blue light exposure is known to enhance alertness and improve performance on cognitive tasks, particularly those requiring attention and working memory. It increases activation in brain regions associated with executive functions, such as the dorsolateral and ventrolateral prefrontal cortex. Prefrontal beta-gamma asymmetry indices (ASI) will be calculated from 4-channel EEG recordings, while autonomic activity will be monitored through heart rate variability (RMSSD) and electrodermal phasic responses. This study aims to elucidate how the combination of auditory stimulation and photometric conditions influences cognitive task performance and physiological responses.


#### **Abstract References**  
- **Red Light Effects**: Red light therapy enhances cognitive function by improving mitochondrial activity, increasing ATP production, and enhancing regional cerebral blood flow, benefiting tasks requiring attention and memory[a][b][c]. It also improves executive function and memory in patients with traumatic brain injuries[b][d].  
- **Blue Light Effects**: Alertness and Cognitive Performance, Working Memory [h]; Reaction Time and Attention[i], 
- **Auditory Stimulation**: The study examines the effects of 10Hz and 40Hz binaural beats on hemispheric asymmetry and autonomic activity.
- **Physiological Measures**: EEG and autonomic measures (RMSSD, EDA) are used to assess physiological responses during tasks[e][f].  
- **Cognitive Modulation**: Auditory beat stimulation can modulate cognitive processes and mood states[g].


`Keywords: Auditory Stimuli, Photometric Conditions, Brain Lateralization, Physiological Responses, Cognitive Tasks, Multisensory, Multidomain`
---

## Experimental Protocol
## Section 1: Cognitive Task Design [1][3]  
### 1.1 Dual-Modality Challenge (10+10 mins)  
**A. Verbal-Semantic Processing (Left Hemisphere Engagement)**  
- **Auditory Text Analysis** (10 mins)   

**Task Description:** Participants will listen to text passages via earphone Buds (70 dB SPL) and identify semantic inconsistencies. The task requires participants to determine if a statement is logically and semantically correct. Based on statement, participants will choose correction option on the screen and state out loud the statement.

**Instructions to Participants:** You will hear a series of sentences. Your task is to listen carefully and identify whether each sentence makes sense or if there is a semantic inconsistency (i.e., something that doesn’t logically fit). If you find an inconsistency, please choose correction option on the screen based on what correction should be made and state out loud the statement. **Response Method:** You will record your verbal responses using a HyperX microphone (with NVIDIA noise suppression). Please speak clearly into the mic when providing your corrections.


**B. Visuospatial Manipulation (Right Hemisphere Engagement)**  
- **Pattern Recognition and Hidden Image Task** (10 mins)  
  - Identify hidden patterns or objects within complex image puzzles  
  - Tasks involve recognizing patterns, counting objects, or detecting hidden images  
  - Performance metric: Rotation angle vs response time slope  

**Task Description:** Participants will view a series of complex image puzzles. In each puzzle, there will be hidden patterns, objects, or images that need to be identified. Tasks may involve counting the number of objects, identifying patterns, or detecting a hidden image within a seemingly random arrangement.

**Instructions to Participants:** You will be shown a series of optical illusions puzzle. Your task is to identify any hidden patterns, objects, or images within each puzzle. For example, you may need to count the number of certain objects, detect a hidden image, or spot a pattern in a cluttered design. Please respond within 1 min.


<!-- **C. Cross-Modal Integration** (8 mins/condition)  
- **Audio-Visual Binding Task**  
  - Match spoken word descriptors ("spiked," "rotating") to abstract figures  
  - Inhibit mismatched pairings using forced-choice paradigm   -->

## Section 2: Auditory Stimulation Protocol [1][2][3]
### 2.1 Beat Generation Parameters  
| Condition               | Specification                          | Neurological Basis[1][3]               |  
|-------------------------|----------------------------------------|----------------------------------------|  
| 10Hz Binaural Beats     | 440Hz ±10Hz (L/R phase offset)         | Right prefrontal beta enhancement[1]   |  
| 40Hz Binaural Beats     | 440Hz carrier, 40Hz AM depth 80%       | Left temporal gamma entrainment[2][3]  |  
<!-- | Nature Sounds           | 1/f noise spectrum with 4Hz modulation | Bilateral alpha synchronization[1]     |   -->

### 2.2 Stimulus Delivery Protocol  
- **Galaxy Buds Pro Earphones**  
  - Binaural beats: Phase-locked delivery (0° left, 180° right initialization)  
  - Monaural AM: Right ear only (left channel muted) to enhance left hemisphere focus  
  - Stimulus ramping: 500ms cosine-squared onset/offset  
  - Inter-stimulus interval: 1500ms ±300ms jitter  

## Section 3: Multimodal Data Acquisition Framework  
### 3.1 Neurophysiological Synchronization  
- **Muse S EEG Preprocessing**  
  - Asymmetry Index (ASI) calculation: (Right AF8 - Left AF7)/(AF7 + AF8)  
  - Frequency bands: Beta (13-30Hz), Gamma (30-45Hz)[3]  
  - Artifact rejection: ±75μV threshold with moving window SD  

- **Empatica EmbracePlus Metrics**  
  - Phasic EDA: 0.05-1.5Hz bandpass (cvxEDA decomposition)  
  - HRV Analysis: RMSSD in 128s windows (matched to task epochs)  

### 3.2 Experimental Timeline  
| Phase               | Duration | Auditory Condition    | Task Component       |  
|---------------------|----------|-----------------------|----------------------|
| Acclimation Time    | 5 Mins   | None                  | General Survey       | 
| Baseline Recording  | 5 mins   | None                  | Resting eyes-open    |  
| Condition 1         | 10 mins  | 10Hz Binaural         | Verbal-Semantic      |  
| Washout             | 4 mins   | 10Hz Binaural + 1min Silence | Experiment Survey    |  
| Condition 2         | 10 mins  | 40Hz Binaural         | Visuospatial         |  
| Washout             | 3 mins   | 40Hz Binaural         | Experiment Survey    |  
<!-- | Condition C         | 8 mins   | Nature Sounds         | Integration + Spatial|   -->


> **Group A:** <br>
  Condition_1 $(C_1)$ = RedLED$(L_1)$, 10Hz$(A_1)$, Task1,2 $(T_{1,2})$ <br>
  Condition_2 $(C_2)$ = RedLED$(L_1)$, 40Hz$(A_2)$, Task1,2 $(T_{1,2})$

> **Group B:** <br>
  Condition_1 $(C_1)$ = BlueLED $(L_2)$, 10Hz$(A_1)$, Task1,2 $(T_{1,2})$ <br>
  Condition_2 $(C_2)$ = BlueLED$(L_2)$, 40Hz$(A_2)$, Task1,2 $(T_{1,2})$

## Section 4: Control Protocol (Per [3] Methodological Standards)  
### 4.1 Environmental Controls  
- **Acoustic Isolation**  
  - Double-walled Nextroom lab  
  - Galaxy Buds passive isolation: 23dB SNR (measured via GRAS 45CA)  

- **Environmental Constants**  
  - Ambient light: LED panels + Red light
  - Ambient light: LED panels + Blue light
  - Temperature: Normal conditions ~22±1.0°C (HVAC-controlled)  

<!-- ### 4.2 Counterbalancing Matrix  
| Group | Order                  | Beat Polarization    |  
|-------|------------------------|----------------------|  
| 1     | Binaural→AM→Nature     | Right→Left→Bilateral |  
| 2     | AM→Nature→Binaural     | Left→Bilateral→Right |  
| 3     | Nature→Binaural→AM     | Bilateral→Right→Left |   -->


## Section 5: Technical Validation for 10Hz Binaural Effects and 40Hz Binaural Effects 
   - The technical validation of binaural effects involves **neuroscientific, psychoacoustic, and EEG-based evidence** supporting the influence of these frequencies on brain activity.

### 5.1 10Hz Binaural Effects (Alpha Wave Stimulation)
#### **Neuroscientific Basis**
- **Right Prefrontal Beta Modulation**:  
  - Studies show **10Hz binaural beats** influence **right temporal lobe activity**, enhancing relaxation and mild cognitive shifts.
- **EEG Alpha Power Increase**:  
  - Increased **alpha synchronization** correlates with meditation, stress reduction, and improved mood.

#### **Psychoacoustic Considerations**
- **Interaural Time Difference (ITD) Validation**:  
  - **Phase offset (0° vs 180°)** ensures proper brainwave entrainment by maintaining the **10Hz difference** between left and right auditory pathways.

#### **Experimental Design Validation**
- **Entrainment Duration**:  
  - **10-minute exposure** to **10Hz beats** aligns with literature on **theta-to-alpha wave transition**, which is linked to relaxation and attentional shifts.
- **Artifact Control**:  
  - **ISI jittering** (introducing slight variations in stimulus timing) prevents rhythmic expectation effects, ensuring natural brain entrainment.

### 5.2 40Hz Binaural Effects (Gamma Wave Stimulation)
#### **Neuroscientific Basis**
- **Cognitive Enhancement and Memory Processing**:  
  - **40Hz stimulation** has been linked to **increased gamma activity**, associated with **working memory, cognitive function, and neural synchronization**.
- **Neural Oscillation Support in Alzheimer's Research**:  
  - Studies suggest **40Hz entrainment** may **enhance synaptic plasticity** and **reduce beta-amyloid accumulation**, relevant for neurodegenerative disease research.

#### **Psychoacoustic Considerations**
- **Interaural Amplitude Modulation (AM) Depth Validation**:  
  - **80% AM depth** effectively triggers **auditory steady-state responses (ASSR)**, supporting cognitive enhancement protocols.

#### **Experimental Design Validation**
- **Hemispheric Asymmetry Consideration**:  
  - **Right-ear dominant delivery** exploits **left-hemisphere auditory processing** benefits, known for language and logical reasoning functions.
- **Gamma Entrainment Protocol**:  
  - **10-minute exposure** aligns with **cortical phase synchronization** timeframes used in focus and attention studies. 

### 5.3 Task Synchronization
   - 10-min blocks allow sufficient entrainment time per [1] theta wave observations  
   - ISI jitter prevents rhythmic expectation artifacts [3]  


### 5.4 Asymmetry Index (ASI)
   - The **ASI** is used to measure differences in brain activity between the left and right hemispheres, and commonly used to quantify hemispheric dominance, validated against [3] laterality index methods. We will be utilizing Muse S sensor capabilities [1] to match beta/gamma focus.   
      
   - $ASI = \frac{(P_{Right} - P_{Left})}{(P_{Right} + P_{Left})}$   
      where:  
         $P_{Right}$ = Power (or amplitude) of brain activity in the **right hemisphere**  
         $P_{Left}$  = Power (or amplitude) of brain activity in the **left hemisphere**  

<!-- #### **How It Works:**
- The ASI value ranges from **-1 to +1**.
  - **Positive ASI**: More activity in the right hemisphere.
  - **Negative ASI**: More activity in the left hemisphere.
  - **Zero (0) ASI**: Symmetric brain activity.

#### **Application in Binaural Beats**
- **10Hz Binaural Beats** (Alpha waves) may induce a shift in **prefrontal asymmetry**, potentially linked to relaxation and mood regulation.  
- **40Hz Binaural Beats** (Gamma waves) could enhance **right-hemisphere dominance**, associated with cognitive processing and attention.  
- ASI helps track **neural lateralization** during auditory entrainment. -->



## Citations:
[a] https://researchoutreach.org/articles/light-therapy-improves-cognitive-function-after-traumatic-brain/ <br>
[b] https://pmc.ncbi.nlm.nih.gov/articles/PMC4043367/ <br>
[c] https://lightlounge.life/about/blog?post=improve-cognitive-function <br>
[d] https://occupationaltherapybrisbane.com.au/red-light-therapy-for-brain-health/  <br>
[e] https://eprints.soton.ac.uk/488356/1/1-s2.0-S0167876024000321-main.pdf  <br>
[f] https://www.mdpi.com/2076-3425/14/2/131 <br>
[g] https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2015.00070/full  <br>
[h] https://pmc.ncbi.nlm.nih.gov/articles/PMC4989256/ <br>
[i] http://dx.doi.org/10.34172/jrhs.2021.66 <br>

[1] https://pmc.ncbi.nlm.nih.gov/articles/PMC11367212/ <br>
[2] https://pmc.ncbi.nlm.nih.gov/articles/PMC8832987/ <br>
[3] https://journals.physiology.org/doi/full/10.1152/jn.00224.2014 <br>
[4] https://www.frontiersin.org/journals/human-neuroscience/articles/10.3389/fnhum.2023.1287018/full <br>
[5] https://pmc.ncbi.nlm.nih.gov/articles/PMC9208616/ <br>
[6] https://www.nature.com/articles/s41398-022-02300-6 <br>
[7] https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0166630 <br>
[8] https://pmc.ncbi.nlm.nih.gov/articles/PMC9812253/ <br>
[9] https://www.nature.com/articles/s41598-020-63980-y <br>
[10] https://www.researchgate.net/publication/269308992_The_investigation_of_alpha_frontal_energy_asymmetry_on_normal_and_stress_subjects_after_listening_to_the_binaural_beats_10_Hz <br>
[11] https://www.researchgate.net/publication/353828632_Effectiveness_of_Receptive_Music_Therapy_with_Imbedded_10_Hz_Binaural_Beats_Compared_with_Standard_Care_for_Patients_with_Major_Depressive_Disorder_A_Randomized_Controlled_Trial <br>
[12] https://www.mdpi.com/2076-3417/12/24/13004 <br>
[13] https://digitalscholarship.unlv.edu/cgi/viewcontent.cgi?article=3661&context=rtds <br>
[14] https://escholarship.org/content/qt2kw474zg/qt2kw474zg.pdf <br>
[15] https://dl.acm.org/doi/abs/10.3233/THC-236001 <br>
[16] https://journals.physiology.org/doi/full/10.1152/jn.00469.2005 <br>
[17] https://www.researchgate.net/publication/361984336_The_age-related_changes_in_40_Hz_Auditory_Steady-State_Response_and_sustained_Event-Related_Fields_to_the_same_amplitude-modulated_tones_in_typically_developing_children_A_magnetoencephalography_study