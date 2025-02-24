# Title: "Prefrontal Laterality Modulation Through Targeted Auditory Beat Stimulation During Multimodal Cognitive Tasks"  

**Abstract**  
This study investigates how auditory beat stimulation modulates prefrontal hemispheric asymmetry and autonomic nervous system activity during cognitively demanding tasks under different lighting conditions. Participants (N=30) will perform verbal-logical (left hemisphere dominant) and visual-spatial (right hemisphere dominant) tasks under two auditory conditions: 10Hz binaural beats (440±10Hz) and 40Hz monaural amplitude-modulated tones (440Hz carrier), each paired in two groups Group-A: Red with 10Hz & 40Hz auditory condiitons; Group-B: Green with 10Hz & 40Hz auditory conditions. Red light therapy has been shown to enhance cognitive function by improving mitochondrial activity, increasing ATP production, and enhancing regional cerebral blood flow, which may benefit tasks requiring attention and memory[a][b][c]. Additionally, red light has been linked to improved executive function and memory in patients with traumatic brain injuries[b][d]. While the effects of green light on cognition are less documented, it is hypothesized to promote visual attention and potentially improve cognitive performance in tasks requiring logical abilities. Prefrontal beta-gamma asymmetry indices will be calculated from 4-channel EEG recordings, while autonomic activity will be monitored through heart rate variability (RMSSD) and electrodermal phasic responses. This study aims to elucidate how the combination of auditory stimulation and lighting conditions influences cognitive task performance and physiological responses.


#### **Abstract References**  
- **Red Light Effects**: Red light therapy enhances cognitive function by improving mitochondrial activity, increasing ATP production, and enhancing regional cerebral blood flow, benefiting tasks requiring attention and memory[a][b][c]. It also improves executive function and memory in patients with traumatic brain injuries[b][d].  
- **Green Light Effects**: Although less documented, green light is hypothesized to promote visual attention and potentially improve cognitive performance in logical tasks.  
- **Auditory Stimulation**: The study examines the effects of 10Hz binaural beats and 40Hz monaural AM tones on hemispheric asymmetry and autonomic activity.  
- **Physiological Measures**: EEG and autonomic measures (RMSSD, EDA) are used to assess physiological responses during tasks.
- - **Physiological Measures**: EEG and autonomic measures (RMSSD, EDA) are used to assess physiological responses during tasks[e][f].  
- **Cognitive Modulation**: Auditory beat stimulation can modulate cognitive processes and mood states[g].


`Keywords: Auditory Stimuli, Brain Lateralization, Physiological Responses, Cognitive Tasks, Multisensory, Multidomain`


## Experimental Protocol
## Section 1: Cognitive Task Design [1][3]  
### 1.1 Dual-Modality Challenge (36 mins total)  
**A. Verbal-Semantic Processing (Left Hemisphere Engagement)**  
- **Auditory Text Analysis** (8 mins/condition)  
  - Listen to text passages (70 dB SPL(Sound Pressure Level)) via earphone Buds  
  - Simultaneously identify semantic inconsistencies (e.g., "A square has five sides")  
  - Response method: Verbal corrections recorded via HyperX mic (NVIDIA noise suppression)  

**B. Visuospatial Manipulation (Right Hemisphere Engagement)**  
- **3D Mental Rotation Task** (8 mins/condition)  
  - Judge mirrored/non-mirrored pairs of Necker cubes  
  - Embedded visual puzzles require 45°-315° mental rotations  
  - Performance metric: Rotation angle vs response time slope  

<!-- **C. Cross-Modal Integration** (8 mins/condition)  
- **Audio-Visual Binding Task**  
  - Match spoken word descriptors ("spiked," "rotating") to abstract figures  
  - Inhibit mismatched pairings using forced-choice paradigm   -->

## Section 2: Auditory Stimulation Protocol [1][2][3]
### 2.1 Beat Generation Parameters  
| Condition               | Specification                          | Neurological Basis[1][3]               |  
|-------------------------|----------------------------------------|----------------------------------------|  
| 10Hz Binaural Beats     | 440Hz ±10Hz (L/R phase offset)         | Right prefrontal beta enhancement[1]   |  
| 40Hz Monaural AM Tones  | 440Hz carrier, 40Hz AM depth 80%       | Left temporal gamma entrainment[2][3]  |  
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
| Condition 1         | 10 mins  | 10Hz Binaural         | Visuospatial + Verbal|  
| Washout             | 3 mins   | Pink noise (60dBA)    | Experiment Survey    |  
| Condition 2         | 10 mins  | 40Hz Monaural AM      | Verbal + Integration |  
| Washout             | 3 mins   | Pink noise (60dBA)    | Experiment Survey    |  
<!-- | Condition C         | 8 mins   | Nature Sounds         | Integration + Spatial|   -->

> **Group A:** <br>
  Condition_1 = RedLED 10Hz (L1A1) + Task1,2 (T1,2) <br>
  Condition_2 = RedLED 40Hz (L1A2) + Task1,2 (T1,2)

> **Group B:** <br>
  Condition_1 = GreenLED 10Hz (L2A1) + Task1,2 (T1,2) <br>
  Condition_2 = GreenLED 40Hz (L2A2) + Task1,2 (T1,2)

## Section 4: Control Protocol (Per [3] Methodological Standards)  
### 4.1 Environmental Controls  
- **Acoustic Isolation**  
  - Double-walled Nextroom lab  
  - Galaxy Buds passive isolation: 23dB SNR (measured via GRAS 45CA)  

- **Physiological Constants**  
  - Ambient light: LED panels + Red light
  - Ambient light: LED panels + Green light
  - Temperature: Normal conditions ~22±0.5°C (HVAC-controlled)  

<!-- ### 4.2 Counterbalancing Matrix  
| Group | Order                  | Beat Polarization    |  
|-------|------------------------|----------------------|  
| 1     | Binaural→AM→Nature     | Right→Left→Bilateral |  
| 2     | AM→Nature→Binaural     | Left→Bilateral→Right |  
| 3     | Nature→Binaural→AM     | Bilateral→Right→Left |   -->

## Technical Validation
1. **10Hz Binaural Effects**  
   - Right prefrontal beta enhancement aligns with [1] findings of 10Hz beat-induced right temporal activation  
   - Phase offset (0° vs 180°) matches interaural time difference requirements from [3]  

2. **40Hz Monaural Design**  
   - AM depth (80%) replicates successful IED reduction protocol from [2]  
   - Right-ear delivery leverages left hemisphere auditory pathway dominance [3]  

3. **Task Synchronization**  
   - 10-min blocks allow sufficient entrainment time per [1] theta wave observations  
   - ISI jitter prevents rhythmic expectation artifacts [3]  

4. **Asymmetry Quantification**  
   - ASI formula validated against [3] laterality index methods  
   - Beta/gamma focus matches Muse S sensor capabilities [1]  


## Citations:
[a] https://researchoutreach.org/articles/light-therapy-improves-cognitive-function-after-traumatic-brain/ <br>
[b] https://pmc.ncbi.nlm.nih.gov/articles/PMC4043367/ <br>
[c] https://lightlounge.life/about/blog?post=improve-cognitive-function <br>
[d] https://occupationaltherapybrisbane.com.au/red-light-therapy-for-brain-health/  <br>
[e] https://eprints.soton.ac.uk/488356/1/1-s2.0-S0167876024000321-main.pdf  <br>
[f] https://www.mdpi.com/2076-3425/14/2/131 <br>
[g] https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2015.00070/full  <br>

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